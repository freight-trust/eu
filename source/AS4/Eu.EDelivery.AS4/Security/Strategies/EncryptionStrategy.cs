﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Security.Cryptography.Xml;
using System.Xml;
using Eu.EDelivery.AS4.Builders.Security;
using Eu.EDelivery.AS4.Exceptions;
using Eu.EDelivery.AS4.Model.Core;
using Eu.EDelivery.AS4.Security.Algorithms;
using Eu.EDelivery.AS4.Security.Encryption;
using Eu.EDelivery.AS4.Security.References;
using Eu.EDelivery.AS4.Security.Transforms;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Encodings;
using Org.BouncyCastle.Crypto.Engines;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Security;

namespace Eu.EDelivery.AS4.Security.Strategies
{
    /// <summary>
    /// An <see cref="IEncryptionStrategy"/> implementation
    /// responsible for the Encryption of the <see cref="AS4Message"/>
    /// </summary>
    public class EncryptionStrategy : EncryptedXml, IEncryptionStrategy
    {
        private readonly XmlDocument _document;
        private readonly List<Attachment> _attachments;

        private readonly EncryptionConfiguration _configuration;
        private readonly List<EncryptedData> _encryptedDatas;
        private readonly AS4EncryptedKey _as4EncryptedKey;

        /// <summary>
        /// Run once Crypto Configuration
        /// </summary>
        static EncryptionStrategy()
        {
            CryptoConfig.AddAlgorithm(typeof(AttachmentCiphertextTransform), AttachmentCiphertextTransform.Url);

            CryptoConfig.AddAlgorithm(typeof(AesGcmAlgorithm), "http://www.w3.org/2009/xmlenc11#aes128-gcm");
            CryptoConfig.AddAlgorithm(typeof(AesGcmAlgorithm), "http://www.w3.org/2009/xmlenc11#aes192-gcm");
            CryptoConfig.AddAlgorithm(typeof(AesGcmAlgorithm), "http://www.w3.org/2009/xmlenc11#aes256-gcm");
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EncryptionStrategy"/> class
        /// </summary>
        /// <param name="document"></param>
        internal EncryptionStrategy(XmlDocument document) : base(document)
        {
            if (document == null)
                throw new ArgumentNullException(nameof(document));

            this._document = document;
            this._configuration = new EncryptionConfiguration();
            this._attachments = new List<Attachment>();
            this._encryptedDatas = new List<EncryptedData>();
            this._as4EncryptedKey = new AS4EncryptedKey();
        }

        /// <summary>
        /// Adds an <see cref="Attachment"/>, which the strategy can use later on in the encryption/decryption logic.
        /// </summary>
        /// <param name="attachment"></param>
        public void AddAttachment(Attachment attachment)
        {
            this._attachments.Add(attachment);
        }

        /// <summary>
        /// Appends all encryption elements, such as <see cref="EncryptedKey"/> and <see cref="EncryptedData"/> elements.
        /// </summary>
        /// <param name="securityElement"></param>
        public void AppendEncryptionElements(XmlElement securityElement)
        {
            if (securityElement == null)
                throw new ArgumentNullException(nameof(securityElement));

            if (securityElement.OwnerDocument == null)
                throw new ArgumentException(@"SecurityHeader needs to have an OwnerDocument", nameof(securityElement));

            XmlDocument securityDocument = securityElement.OwnerDocument;

            // Add additional elements such as certificate references
            this._configuration.Key.SecurityTokenReference.AppendSecurityTokenTo(securityElement, securityDocument);
            this._as4EncryptedKey.AppendEncryptedKey(securityElement);
            AppendEncryptedDataElements(securityElement, securityDocument);
        }

        private void AppendEncryptedDataElements(XmlElement securityElement, XmlDocument securityDocument)
        {
            foreach (EncryptedData encryptedData in this._encryptedDatas)
            {
                XmlElement encryptedDataElement = encryptedData.GetXml();
                XmlNode importedEncryptedDataNode = securityDocument.ImportNode(encryptedDataElement, deep: true);

                securityElement.AppendChild(importedEncryptedDataNode);
            }
        }

        /// <summary>
        /// Sets the encryption algorithm to use.
        /// </summary>
        /// <param name="encryptionAlgorithm"></param>
        public void SetEncryptionAlgorithm(string encryptionAlgorithm)
        {
            this._configuration.Data.EncryptionMethod = encryptionAlgorithm;
        }

        /// <summary>
        /// Sets the certificate to use when encrypting/decrypting.
        /// </summary>
        /// <param name="certificate"></param>
        public void SetCertificate(X509Certificate2 certificate)
        {
            this._configuration.Certificate = certificate;
        }

        /// <summary>
        /// Encrypts the <see cref="AS4Message"/> and its attachments.
        /// </summary>
        public void EncryptMessage()
        {
            this._encryptedDatas.Clear();

            OaepEncoding encoding = CreateOaepEncoding();
            byte[] encryptionKey = GenerateSymmetricKey(encoding.GetOutputBlockSize());
            BuildEncryptedKey(encoding, encryptionKey);

            SymmetricAlgorithm encryptionAlgorithm = CreateSymmetricEncryptionAlgorithm(encryptionKey);
            EncryptAttachmentsWithAlgorithm(encryptionAlgorithm);
        }

        private OaepEncoding CreateOaepEncoding()
        {
            RSA rsaPublicKey = this._configuration.Certificate.GetRSAPublicKey();
            RsaKeyParameters publicKey = DotNetUtilities.GetRsaPublicKey(rsaPublicKey);
            IDigest digestFromUri = GetDigestWithAlgorithm();

            var encoding = new OaepEncoding(
                cipher: new RsaEngine(), hash: digestFromUri, mgf1Hash: new Sha1Digest(), encodingParams: new byte[0]);

            encoding.Init(forEncryption: true, param: publicKey);

            return encoding;
        }

        private IDigest GetDigestWithAlgorithm()
        {
            string keyDigestMethod = this._configuration.Key.DigestMethod;
            return DigestUtilities.GetDigest(keyDigestMethod.Substring(keyDigestMethod.IndexOf('#') + 1));
        }

        private byte[] GenerateSymmetricKey(int keySize)
        {
            using (var rijn = new RijndaelManaged {KeySize = keySize}) return rijn.Key;
        }

        private void BuildEncryptedKey(OaepEncoding encoding, byte[] symmetricKey)
        {
            var builder = new EncryptedKeyBuilder()
                .WithEncoding(encoding)
                .WithSymmetricKey(symmetricKey)
                .WithSecurityTokenReference(this._configuration.Key.SecurityTokenReference);

            this._as4EncryptedKey.SetEncryptedKey(builder.Build());
        }

        private SymmetricAlgorithm CreateSymmetricEncryptionAlgorithm(byte[] symmetricKey)
        {
            var symmetricEncryptionAlgorithm =
                (SymmetricAlgorithm) CryptoConfig.CreateFromName(this._configuration.Data.EncryptionMethod);
            symmetricEncryptionAlgorithm.Key = symmetricKey;

            return symmetricEncryptionAlgorithm;
        }

        private void EncryptAttachmentsWithAlgorithm(SymmetricAlgorithm encryptionAlgorithm)
        {
            foreach (Attachment attachment in this._attachments)
            {
                EncryptedData encryptedData = CreateEncryptedData();
                encryptedData.MimeType = attachment.ContentType;

                EncryptAttachmentContents(attachment, encryptionAlgorithm);
                AssemblyEncryptedData(encryptedData, attachment);

                this._encryptedDatas.Add(encryptedData);
                // Add a reference in the key to this encryptedData element
                this._as4EncryptedKey.AddDataReference(encryptedData.Id);
            }
        }

        private void EncryptAttachmentContents(Attachment attachment, SymmetricAlgorithm algorithm)
        {
            using (var attachmentContents = new MemoryStream())
            {
                attachment.Content.CopyTo(attachmentContents);
                byte[] encryptedBytes = base.EncryptData(attachmentContents.ToArray(), algorithm);

                attachment.Content = new MemoryStream(encryptedBytes);
                attachment.ContentType = "application/octet-stream";
            }
        }

        private EncryptedData CreateEncryptedData()
        {
            return new EncryptedData
            {
                Id = "ed-" + Guid.NewGuid(),
                Type = this._configuration.Data.EncryptionType,
                EncryptionMethod = new EncryptionMethod(this._configuration.Data.EncryptionMethod),
                CipherData = new CipherData()
            };
        }

        private void AssemblyEncryptedData(EncryptedData encryptedData, Attachment attachment)
        {
            encryptedData.CipherData.CipherReference = new CipherReference("cid:" + attachment.Id);
            encryptedData.CipherData.CipherReference.TransformChain.Add(new AttachmentCiphertextTransform());
            encryptedData.KeyInfo.AddClause(new ReferenceSecurityTokenReference {ReferenceId = this._as4EncryptedKey.GetReferenceId()});
        }

        /// <summary>
        /// Retrieves the decryption initialization vector (IV) from an EncryptedData  object.
        /// </summary>
        /// <returns>A byte array that contains the decryption initialization vector (IV).</returns>
        /// <param name="encryptedData"></param>
        /// <param name="symmetricAlgorithmUri"></param>
        public override byte[] GetDecryptionIV(EncryptedData encryptedData, string symmetricAlgorithmUri)
        {
            if (encryptedData == null)
                throw new ArgumentNullException(nameof(encryptedData));
            if (symmetricAlgorithmUri == null)
            {
                if (encryptedData.EncryptionMethod == null)
                    throw new CryptographicException("Missing encryption algorithm");
                symmetricAlgorithmUri = encryptedData.EncryptionMethod.KeyAlgorithm;
            }
            int ivLength;

            if (symmetricAlgorithmUri == "http://www.w3.org/2009/xmlenc11#aes128-gcm") ivLength = 12;
            else
            {
                if (symmetricAlgorithmUri != "http://www.w3.org/2001/04/xmlenc#des-cbc" &&
                    symmetricAlgorithmUri != "http://www.w3.org/2001/04/xmlenc#tripledes-cbc")
                {
                    if (symmetricAlgorithmUri != "http://www.w3.org/2001/04/xmlenc#aes128-cbc" &&
                        symmetricAlgorithmUri != "http://www.w3.org/2001/04/xmlenc#aes192-cbc" &&
                        symmetricAlgorithmUri != "http://www.w3.org/2001/04/xmlenc#aes256-cbc")
                        throw new CryptographicException("Uri not supported");
                    ivLength = 16;
                }
                else ivLength = 8;
            }
            var iv = new byte[ivLength];
            Buffer.BlockCopy(encryptedData.CipherData.CipherValue, srcOffset: 0, dst: iv, dstOffset: 0, count: iv.Length);

            return iv;
        }

        /// <summary>
        /// Decrypts the <see cref="AS4Message"/>, replacing the encrypted content with the decrypted content.
        /// </summary>
        public void DecryptMessage()
        {
            IEnumerable<XmlElement> encryptedDataElements = SelectEncryptedDataElements();
            DecryptEncryptedDataElements(encryptedDataElements);
        }

        private IEnumerable<XmlElement> SelectEncryptedDataElements()
        {
            var namespaceManager = new XmlNamespaceManager(this._document.NameTable);
            namespaceManager.AddNamespace("enc", "http://www.w3.org/2001/04/xmlenc#");

            IEnumerable<XmlElement> encryptedDataElements = this._document
                .SelectNodes("//enc:EncryptedData", namespaceManager)?.OfType<XmlElement>();

            if (encryptedDataElements == null)
                throw new AS4Exception("No EncryptedData elements found to decrypt");

            return encryptedDataElements;
        }

        private void DecryptEncryptedDataElements(IEnumerable<XmlElement> encryptedDataElements)
        {
            foreach (XmlElement encryptedDataElement in encryptedDataElements)
                TryDecryptEncryptedDataElement(encryptedDataElement);
        }

        private void TryDecryptEncryptedDataElement(XmlElement encryptedDataElement)
        {
            try
            {
                EncryptedData encryptedData = LoadEncryptedData(encryptedDataElement);
                this._as4EncryptedKey.LoadEncryptedKey(this._document);

                SymmetricAlgorithm decryptAlgorithm = GetDecryptionAlgorithm(encryptedData);

                string uri = encryptedData.CipherData.CipherReference.Uri;
                Attachment attachment = this._attachments.Single(x => string.Equals(x.Id, uri.Substring(4)));

                using (var attachmentInMemoryStream = new MemoryStream())
                {
                    attachment.Content.CopyTo(attachmentInMemoryStream);
                    encryptedData.CipherData = new CipherData(attachmentInMemoryStream.ToArray());
                }

                byte[] decryptedData = base.DecryptData(encryptedData, decryptAlgorithm);
                attachment.Content.Dispose();
                attachment.Content = new MemoryStream(decryptedData);
                attachment.ContentType = encryptedData.MimeType;
            }
            catch (Exception)
            {
                throw new AS4Exception($"Failed to decrypt data element");
            }
        }

        private EncryptedData LoadEncryptedData(XmlElement encryptedDataElement)
        {
            var encryptedData = new EncryptedData();
            encryptedData.LoadXml(encryptedDataElement);

            return encryptedData;
        }

        private SymmetricAlgorithm GetDecryptionAlgorithm(EncryptedData encryptedData)
        {
            byte[] key = DecryptEncryptedKey();

            var decryptionAlgorithm =
                (SymmetricAlgorithm) CryptoConfig.CreateFromName(encryptedData.EncryptionMethod.KeyAlgorithm);
            decryptionAlgorithm.Key = key;

            return decryptionAlgorithm;
        }

        private byte[] DecryptEncryptedKey()
        {
            OaepEncoding encoding = CreateDecryptEncoding();

            // We do not look at the KeyInfo element in here, but rather decrypt it with the certificate provided as argument.
            AsymmetricCipherKeyPair encryptionCertificateKeyPair =
                DotNetUtilities.GetRsaKeyPair(this._configuration.Certificate.GetRSAPrivateKey());

            encoding.Init(false, encryptionCertificateKeyPair.Private);

            CipherData cipherData = this._as4EncryptedKey.GetCipherData();
            return encoding.ProcessBlock(
                inBytes: cipherData.CipherValue, inOff: 0, inLen: cipherData.CipherValue.Length);
        }

        private OaepEncoding CreateDecryptEncoding()
        {
            XmlElement digestMethodNode = this._as4EncryptedKey.GetDigestMethod();
            IDigest digestMethod = RetrieveDigestMethod(digestMethodNode);
            var engine = new RsaEngine();

            return new OaepEncoding(engine, digestMethod, new Sha1Digest(), new byte[0]);
        }

        private IDigest RetrieveDigestMethod(XmlElement digestMethodNode)
        {
            IDigest digestMethod = new Sha256Digest();

            string algorithm = digestMethodNode?.GetAttribute("Algorithm");
            if (algorithm != null)
                digestMethod = DigestUtilities.GetDigest(algorithm.Substring(algorithm.IndexOf('#') + 1));

            return digestMethod;
        }
    }
}