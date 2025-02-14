﻿using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using Eu.EDelivery.AS4.Entities;
using Eu.EDelivery.AS4.Extensions;
using Eu.EDelivery.AS4.Http;
using Eu.EDelivery.AS4.Model.Core;
using Eu.EDelivery.AS4.Model.Internal;
using Eu.EDelivery.AS4.Model.PMode;
using Eu.EDelivery.AS4.Serialization;
using Eu.EDelivery.AS4.Steps;
using Eu.EDelivery.AS4.Steps.Send;
using Eu.EDelivery.AS4.TestUtils.Stubs;
using Eu.EDelivery.AS4.UnitTests.Common;
using Eu.EDelivery.AS4.UnitTests.Extensions;
using Eu.EDelivery.AS4.UnitTests.Model;
using Eu.EDelivery.AS4.UnitTests.Repositories;
using Xunit;
using RetryReliability = Eu.EDelivery.AS4.Entities.RetryReliability;

namespace Eu.EDelivery.AS4.UnitTests.Steps.Send
{
    public class GivenSendAS4MessageStepFacts : GivenDatastoreFacts
    {
        [Fact]
        public async Task Use_ReceivingPMode_When_No_SendingPMode_Is_Available()
        {
            // Arrange
            var userMessage = new UserMessage($"user-{Guid.NewGuid()}");
            var message = AS4Message.Create(userMessage);

            var output = new MemoryStream();
            await SerializerProvider
                .Default
                .Get(message.ContentType)
                .SerializeAsync(message, output);

            var ctx = new MessagingContext(
                message, 
                new ReceivedMessage(output, message.ContentType),
                MessagingContextMode.Send)
            {
                ReceivingPMode = new ReceivingProcessingMode
                {
                    ReplyHandling =
                    {
                        ResponseConfiguration = new PushConfiguration
                        {
                            Protocol = { Url = "http://some/endpoint/path" }
                        }
                    }
                }
            };

            var receipt = new Receipt($"receipt-{Guid.NewGuid()}", userMessage.MessageId);
            var stub = StubHttpClient.ThatReturns(AS4Message.Create(receipt));

            IStep sut = CreateSendStepWithResponse(stub);

            // Act
            StepResult result = await sut.ExecuteAsync(ctx);

            // Assert
            Assert.True(result.Succeeded, "Sending UserMessage step has not succeeded");
            Assert.Equal(receipt, result.MessagingContext.AS4Message.PrimaryMessageUnit);

            // TearDown
            ctx.Dispose();
        }

        [Fact]
        public async Task Update_RetryReliability_To_Pending_When_Receiver_Is_Offline()
        {
            // Arrange
            string ebmsMessageId = $"user-{Guid.NewGuid()}";
            AS4Message tobeSendMessage = AS4Message.Create(new UserMessage(ebmsMessageId));

            var outMessage = new OutMessage(ebmsMessageId);
            GetDataStoreContext.InsertOutMessage(outMessage);
            GetDataStoreContext.InsertRetryReliability(
                RetryReliability.CreateForOutMessage(
                    refToOutMessageId: outMessage.Id,
                    maxRetryCount: 2,
                    retryInterval: TimeSpan.FromSeconds(1),
                    type: RetryType.Send));

            var ctx = new MessagingContext(
                tobeSendMessage,
                new ReceivedEntityMessage(
                    outMessage,
                    tobeSendMessage.ToStream(),
                    tobeSendMessage.ContentType),
                MessagingContextMode.Send)
            {
                SendingPMode = CreateSendPModeWithPushUrl()
            };

            var sabotageException = new WebException("Remote host not available");
            IStep sut = CreateSendStepWithResponse(
                StubHttpClient.ThatThrows(sabotageException));

            // Act / Assert
            WebException actualException = 
                await Assert.ThrowsAsync<WebException>(
                    () => sut.ExecuteAsync(ctx));

            Assert.Equal(sabotageException, actualException);

            GetDataStoreContext.AssertRetryRelatedOutMessage(
                outMessage.Id,
                r =>
                {
                    Assert.NotNull(r);
                    Assert.Equal(RetryStatus.Pending, r.Status);
                });
        }

        [Fact]
        public async Task After_Send_Updates_Request_Operation_And_Status_To_Sent_For_Exsiting_SendPMode()
        {
            // Arrange
            string ebmsMessageId = $"user-{Guid.NewGuid()}";
            AS4Message tobeSentMsg = AS4Message.Create(new FilledUserMessage(ebmsMessageId));

            var inserted = new OutMessage(ebmsMessageId: ebmsMessageId);
            GetDataStoreContext.InsertOutMessage(inserted);

            var receivedMessage = new ReceivedEntityMessage(
                inserted,
                tobeSentMsg.ToStream(),
                tobeSentMsg.ContentType);

            var ctx = new MessagingContext(
                tobeSentMsg, 
                receivedMessage,
                MessagingContextMode.Send)
                {
                    SendingPMode = CreateSendPModeWithPushUrl()
                };

            AS4Message receiptMessage = 
                AS4Message.Create(new Receipt($"receipt-{Guid.NewGuid()}", $"user-{Guid.NewGuid()}"));

            // Act 
            IStep sut = CreateSendStepWithResponse(
                StubHttpClient.ThatReturns(receiptMessage));

            await sut.ExecuteAsync(ctx);

            // Assert
            GetDataStoreContext.AssertOutMessage(
                ebmsMessageId,
                message =>
                {
                    Assert.Equal(OutStatus.Sent, message.Status.ToEnum<OutStatus>());
                    Assert.Equal(Operation.Sent, message.Operation);
                });
        }

        [Fact]
        public async Task Send_Results_In_Stop_Execution_If_Response_Is_PullRequest_Warning_For_Exsisting_SendPMode()
        {
            // Arrange
            AS4Message as4Message = AS4Message.Create(Error.CreatePullRequestWarning($"error-{Guid.NewGuid()}"));
            IStep sut = CreateSendStepWithResponse(
                StubHttpClient.ThatReturns(as4Message));

            MessagingContext ctx = CreateMessagingContextWithDefaultPullRequest();
            ctx.SendingPMode = CreateSendPModeWithPushUrl();

            // Act
            StepResult actualResult = await sut.ExecuteAsync(ctx);

            // Assert
            Assert.False(actualResult.CanProceed);
        }

        [Fact]
        public async Task Send_Returns_Empty_Response_For_Empty_Request_For_Existing_SendPMode()
        {
            // Arrange
            IStep sut = CreateSendStepWithResponse(
                StubHttpClient.ThatReturns(HttpStatusCode.Accepted));

            MessagingContext ctx = CreateMessagingContextWithDefaultPullRequest();
            ctx.SendingPMode = CreateSendPModeWithPushUrl();

            // Act
            StepResult actualResult = await sut.ExecuteAsync(ctx);

            // Assert
            Assert.True(actualResult.MessagingContext.AS4Message.IsEmpty);
            Assert.False(actualResult.CanProceed);
        }

        [Fact]
        public async Task Send_Returns_Empty_Response_For_Empty_Request_For_Response_SendPMode()
        {
            // Arrange
            IStep sut = CreateSendStepWithResponse(
                StubHttpClient.ThatReturns(HttpStatusCode.Accepted));

            MessagingContext ctx = CreateMessagingContextWithDefaultPullRequest();
            ctx.SendingPMode = CreateSendPModeWithPushUrl();

            // Act
            StepResult actualResult = await sut.ExecuteAsync(ctx);

            // Assert
            Assert.True(actualResult.MessagingContext.AS4Message.IsEmpty);
            Assert.False(actualResult.CanProceed);
        }

        private static MessagingContext CreateMessagingContextWithDefaultPullRequest()
        {
            var pullRequest = AS4Message.Create(
                new PullRequest(messageId: "message-id", mpc: null));

            return new MessagingContext(
                new ReceivedMessage(
                    pullRequest.ToStream(), 
                    pullRequest.ContentType),
                MessagingContextMode.Receive);
        }

        private IStep CreateSendStepWithResponse(IHttpClient client)
        {
            return new SendAS4MessageStep(GetDataStoreContext, client);
        }

        private static SendingProcessingMode CreateSendPModeWithPushUrl()
        {
            return new SendingProcessingMode
            {
                PushConfiguration = new PushConfiguration
                {
                    Protocol = { Url = "http://ignored/path" }
                },
                Reliability =
                {
                    ReceptionAwareness = { IsEnabled = true }
                }
            };
        }
    }
}