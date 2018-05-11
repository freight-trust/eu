﻿using System;
using System.ComponentModel;
using System.Configuration;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Eu.EDelivery.AS4.Common;
using Eu.EDelivery.AS4.Model.Internal;
using Eu.EDelivery.AS4.Model.PMode;
using Eu.EDelivery.AS4.Repositories;
using Eu.EDelivery.AS4.Security.Encryption;
using NLog;

namespace Eu.EDelivery.AS4.Steps.Send
{
    /// <summary>
    /// Describes how the MSH encrypts the ebMS UserMessage
    /// </summary>
    [Info("Encrypt AS4 Message if necessary")]
    [Description("This step encrypts the AS4 Message and its attachments if encryption is enabled in the Sending PMode")]
    public class EncryptAS4MessageStep : IStep
    {
        private static readonly ILogger Logger = LogManager.GetCurrentClassLogger();
        private readonly ICertificateRepository _certificateRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="EncryptAS4MessageStep"/> class
        /// </summary>
        public EncryptAS4MessageStep() : this(Registry.Instance.CertificateRepository) { }

        /// <summary>
        /// Initializes a new instance of the <see cref="EncryptAS4MessageStep"/> class
        /// </summary>
        /// <param name="certificateRepository"></param>
        public EncryptAS4MessageStep(ICertificateRepository certificateRepository)
        {
            _certificateRepository = certificateRepository;
        }

        /// <summary>
        /// Start Encrypting AS4 Message
        /// </summary>
        /// <param name="messagingContext"></param>
        /// <returns></returns>
        public async Task<StepResult> ExecuteAsync(MessagingContext messagingContext)
        {
            if (!messagingContext.SendingPMode.Security.Encryption.IsEnabled)
            {
                return await ReturnSameMessagingContext(messagingContext);
            }

            TryEncryptAS4Message(messagingContext);

            return await StepResult.SuccessAsync(messagingContext);
        }

        private void TryEncryptAS4Message(MessagingContext messagingContext)
        {
            Logger.Info(
                $"{messagingContext.Logging} Encrypt AS4 Message with given encryption information " + 
                $"configured in the Sending PMode: {messagingContext.SendingPMode.Id}");

            try
            {
                var keyEncryptionConfig = RetrieveKeyEncryptionConfig(messagingContext.SendingPMode);
                var encryptionSettings = messagingContext.SendingPMode.Security.Encryption;
                var dataEncryptionConfig = new DataEncryptionConfiguration(
                    encryptionMethod: encryptionSettings.Algorithm, 
                    algorithmKeySize: encryptionSettings.AlgorithmKeySize);

                messagingContext.AS4Message.Encrypt(keyEncryptionConfig, dataEncryptionConfig);
            }
            catch (Exception exception)
            {
                string description = $"{messagingContext.Logging} Problems with encryption AS4 Message: {exception}";
                Logger.Error(description);

                throw new CryptographicException(description, exception);
            }
        }

        private KeyEncryptionConfiguration RetrieveKeyEncryptionConfig(SendingProcessingMode pmode)
        {
            X509Certificate2 certificate = RetrieveCertificate(pmode);

            return new KeyEncryptionConfiguration(
                encryptionCertificate: certificate, 
                keyEncryption: pmode.Security.Encryption.KeyTransport);
        }

        private X509Certificate2 RetrieveCertificate(SendingProcessingMode pmode)
        {
            Encryption encryptionSettings = pmode.Security.Encryption;
            if (encryptionSettings.EncryptionCertificateInformation == null)
            {
                throw new ConfigurationErrorsException(
                    $"(Receive) No encryption certificate information found in Sending PMode {pmode.Id} to perform encryption");
            }

            if (encryptionSettings.EncryptionCertificateInformation is CertificateFindCriteria certFindCriteria)
            {
                return _certificateRepository.GetCertificate(
                    certFindCriteria.CertificateFindType, 
                    certFindCriteria.CertificateFindValue);
            }

            if (encryptionSettings.EncryptionCertificateInformation is PublicKeyCertificate pubKeyCert)
            {
                return new X509Certificate2(Convert.FromBase64String(pubKeyCert.Certificate), string.Empty);
            }

            throw new NotSupportedException(
                $"(Receive) The encryption certificate information specified in the Sending PMode {pmode.Id} could not be used to retrieve the certificate");            
        }

        private static Task<StepResult> ReturnSameMessagingContext(MessagingContext messagingContext)
        {
            Logger.Debug(
                $"{messagingContext.Logging} No encryption will happen because the " + 
                $"Sending PMode {messagingContext.SendingPMode.Id} encryption is disabled");

            return StepResult.SuccessAsync(messagingContext);
        }
    }
}