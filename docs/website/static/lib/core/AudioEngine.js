"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioEngine = void 0;
var channels_1 = require("./channels");
var effects_1 = require("./effects");
var instruments_1 = require("./instruments");
/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Classname
 *  @extends ParentClass
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
var AudioEngine = /** @class */ (function () {
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function AudioEngine() {
        // private _masterContext: AudioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        this._masterContext = new AudioContext();
        this._masterChannel = new channels_1.MixChannel(this._masterContext);
        this._mixChannels = new Map();
        this._channelStrips = new Map();
        this._soundPlayers = new Map();
        this._masterChannel.output.connect(this._masterContext.destination);
    }
    Object.defineProperty(AudioEngine.prototype, "masterChannel", {
        /**
         * Summary. (use period)
         *
         * Description. (use period)
         *
         * @see  Function/class relied on
         *
         * @param {type}   var           Description.
         * @param {type}   [var]         Description of optional variable.
         * @param {type}   [var=default] Description of optional variable with default variable.
         * @param {Object} objectVar     Description.
         * @param {type}   objectVar.key Description of a key in the objectVar parameter.
         *
         * @return {type} Return value description.
         */
        get: function () {
            return this._masterChannel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioEngine.prototype, "mixChannels", {
        /**
         * Summary. (use period)
         *
         * Description. (use period)
         *
         * @see  Function/class relied on
         *
         * @param {type}   var           Description.
         * @param {type}   [var]         Description of optional variable.
         * @param {type}   [var=default] Description of optional variable with default variable.
         * @param {Object} objectVar     Description.
         * @param {type}   objectVar.key Description of a key in the objectVar parameter.
         *
         * @return {type} Return value description.
         */
        get: function () {
            return this._mixChannels;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     * @param {type}   [var]         Description of optional variable.
     * @param {type}   [var=default] Description of optional variable with default variable.
     * @param {Object} objectVar     Description.
     * @param {type}   objectVar.key Description of a key in the objectVar parameter.
     *
     * @return {type} Return value description.
     */
    AudioEngine.prototype.getMixChannel = function (channelName) {
        return this._mixChannels.get(channelName);
    };
    Object.defineProperty(AudioEngine.prototype, "channelStrip", {
        /**
         * Summary. (use period)
         *
         * Description. (use period)
         *
         * @see  Function/class relied on
         *
         * @param {type}   var           Description.
         * @param {type}   [var]         Description of optional variable.
         * @param {type}   [var=default] Description of optional variable with default variable.
         * @param {Object} objectVar     Description.
         * @param {type}   objectVar.key Description of a key in the objectVar parameter.
         *
         * @return {type} Return value description.
         */
        get: function () {
            return this._channelStrips;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     * @param {type}   [var]         Description of optional variable.
     * @param {type}   [var=default] Description of optional variable with default variable.
     * @param {Object} objectVar     Description.
     * @param {type}   objectVar.key Description of a key in the objectVar parameter.
     *
     * @return {type} Return value description.
     */
    AudioEngine.prototype.getChannelStrip = function (channelName) {
        return this._channelStrips.get(channelName);
    };
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     * @param {type}   [var]         Description of optional variable.
     * @param {type}   [var=default] Description of optional variable with default variable.
     * @param {Object} objectVar     Description.
     * @param {type}   objectVar.key Description of a key in the objectVar parameter.
     *
     * @return {type} Return value description.
     */
    // createSoundPlayer(
    //   playerName: string,
    //   sounds: SoundsLibrary,
    //   mixChannelName?: EngineMixChannels
    // ): SoundPlayer;
    // createSoundPlayer(
    //   playerName: string,
    //   sounds: SoundsLibrary,
    //   channelStripName?: string
    // ): SoundPlayer;
    AudioEngine.prototype.createSoundPlayer = function (playerName, sounds, channelName) {
        if (channelName === void 0) { channelName = 'master'; }
        this._soundPlayers.set(playerName, new instruments_1.SoundPlayer(this._masterContext, sounds, this.channelToConnectNode(channelName)));
        // conect to master channel
        return this._soundPlayers.get(playerName);
    };
    AudioEngine.prototype.createEffect = function (effectType, options) {
        if (options === void 0) { options = {}; }
        if (effectType === '_3BandEQ') {
            return new effects_1._3BandEQ(this._masterContext, options);
        }
        else if (effectType === 'Delay') {
            return new effects_1.Delay(this._masterContext, options);
        }
        else if (effectType === 'Distortion') {
            return new effects_1.Distortion(this._masterContext, options);
        }
        else if (effectType === 'Filter') {
            return new effects_1.Filter(this._masterContext, options);
        }
        else if (effectType === 'Pan') {
            return new effects_1.Pan(this._masterContext, options);
        }
        else if (effectType === 'Reverb') {
            return new effects_1.Reverb(this._masterContext, options);
        }
    };
    /**
     * Create a mixChannel and connect it to the chosen channel or master
     *
     * It will connect the mixChannel to the master channel.
     *
     * @see  Function
     *
     * @param {string}    name    The name of the mixChannel you want to create.
     *
     * @return {MixChannel} Return a mixChannel.
     */
    AudioEngine.prototype.createMixChannel = function (channelName) {
        this._mixChannels.set(channelName, new channels_1.MixChannel(this._masterContext));
        this._mixChannels
            .get(channelName)
            .output.connect(this._masterChannel.input);
        return this._mixChannels.get(channelName);
    };
    /**
     * Create a channelStrip for effects and connect it to the chosen channel or master
     *
     * If no channelName is provided, it will connect to the master channel by default.
     *
     * @see  Function
     *
     * @param {string}                    name                      The name of the channelStrip you want to create.
     * @param {Effect<EffectOptions>[]}   [effects=[]]              The effects you want to start your channel with.
     * @param {type}                      [channelName='master']    The mixChannel or effectsChannel you want to connect your channel to.
     *
     * @return {ChannelStrip} Return a channelStrip.
     */
    AudioEngine.prototype.createChannelStrip = function (name, effects, channelName) {
        if (effects === void 0) { effects = []; }
        if (channelName === void 0) { channelName = 'master'; }
        this._channelStrips.set(name, new channels_1.ChannelStrip(this._masterContext, effects));
        this._channelStrips
            .get(name)
            .output.connect(this.channelToConnectNode(channelName));
        return this._channelStrips.get(name);
    };
    AudioEngine.prototype.channelToConnectNode = function (channelName) {
        return channelName === 'master'
            ? this._masterChannel.input
            : Object.keys(this._mixChannels).some(function (key) { return key === channelName; })
                ? this._mixChannels.get(channelName).input
                : Object.keys(this._channelStrips).some(function (key) { return key === channelName; })
                    ? this._channelStrips.get(channelName).input
                    : this._masterChannel.input;
    };
    return AudioEngine;
}());
exports.AudioEngine = AudioEngine;
//# sourceMappingURL=AudioEngine.js.map