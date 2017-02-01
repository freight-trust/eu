﻿using System.Collections.Generic;
using Eu.EDelivery.AS4.Model.Internal;
using Eu.EDelivery.AS4.Model.PMode;

namespace Eu.EDelivery.AS4.Common
{
    using System;

    public interface IConfig
    {
        /// <summary>
        /// Initialize Configuration
        /// </summary>
        void Initialize();

        /// <summary>
        /// Gets a value indicating whether if the Configuration is IsInitialized
        /// </summary>
        bool IsInitialized { get; }

        /// <summary>
        /// Retrieve Setting from the Global Configurations
        /// </summary>
        /// <param name="key">Registered Key for the Setting</param>
        /// <returns></returns>
        string GetSetting(string key);

        /// <summary>
        /// Retrieve the PMode from the Global Settings
        /// </summary>
        /// <param name="id"></param>
        /// <exception cref="Exception"></exception>
        /// <returns></returns>
        SendingProcessingMode GetSendingPMode(string id);

        /// <summary>
        /// Return all the installed Receiving Processing Modes
        /// </summary>
        /// <returns></returns>
        IEnumerable<ReceivingProcessingMode> GetReceivingPModes();

        IEnumerable<SettingsAgent> GetSettingsAgents();

        /// <summary>
        /// Gets the urls on which a HttpReceiver should listen to perform the conformance-tests.
        /// </summary>        
        /// <returns>A collection of strings.  Each item represents an url.</returns>        
        /// <remarks>For every Url that is returned, a special Minder-Agent will be instantiated.</remarks>
        IEnumerable<string> GetUrlsForEnabledMinderTestAgents();
    }

    public enum PropertyType
    {
        Optional,
        Mandatory,
        None
    }
}