var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { ChannelStrip, MixChannel } from './channels';
import { Delay, Distortion, Filter, Pan, Reverb } from './effects';
import { AudioInput } from './instruments';
import { SoundPlayer } from './SoundPlayer.class';
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
        /**
         * Create a MixChannel.
         */
        // private _masterContext: AudioContext = new AudioContext();
        this._masterContext = new AudioContext();
        // typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;
        /**
         * Create a MixChannel.
         */
        this._masterChannel = new MixChannel(this._masterContext);
        // private _masterContext: AudioContext;
        // private _masterChannel: MixChannel;
        /**
         * Create a MixChannel.
         */
        this._mixChannels = {};
        /**
         * Create a MixChannel.
         */
        this._channelStrips = {};
        /**
         * Create a MixChannel.
         */
        this._soundPlayers = {};
        /**
         * Create an AudioIUnput
         */
        this._audioInputs = {};
        // window.AudioContext = window.AudioContext || window.webkitAudioContext;
        // this._masterContext = new global.AudioContext();
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
        return this._mixChannels[channelName];
    };
    Object.defineProperty(AudioEngine.prototype, "channelStrips", {
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
        return this._channelStrips[channelName];
    };
    Object.defineProperty(AudioEngine.prototype, "soundPlayers", {
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
            return this._soundPlayers;
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
    AudioEngine.prototype.getSoundPlayer = function (playerName) {
        return this._soundPlayers[playerName];
    };
    /**
     *
     * @returns
     */
    AudioEngine.prototype.getAudioInput = function (audioInputName) {
        return this._audioInputs[audioInputName];
    };
    AudioEngine.prototype.getAduioInputSources = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new window.InputDeviceInfo()];
            });
        });
    };
    /**
     *
     * @returns
     */
    AudioEngine.prototype.createAudioInput = function (audioInputName) {
        this._audioInputs[audioInputName] = new AudioInput(this._masterContext);
        return this._audioInputs[audioInputName];
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
        this._soundPlayers[playerName] = new SoundPlayer(this._masterContext, sounds, this._channelToConnectNode(channelName));
        // conect to master channel
        return this._soundPlayers[playerName];
    };
    AudioEngine.prototype.createEffect = function (effectType, options) {
        if (options === void 0) { options = {}; }
        // if (effectType === '_3BandEQ') {
        //   return new _3BandEQ(this._masterContext, options);
        // } else
        if (effectType === 'Delay') {
            return new Delay(this._masterContext, options);
        }
        else if (effectType === 'Distortion') {
            return new Distortion(this._masterContext, options);
        }
        else if (effectType === 'Filter') {
            return new Filter(this._masterContext, options);
        }
        else if (effectType === 'Pan') {
            return new Pan(this._masterContext, options);
        }
        else if (effectType === 'Reverb') {
            return new Reverb(this._masterContext, options);
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
        this._mixChannels[channelName] = new MixChannel(this._masterContext);
        this._mixChannels[channelName].output.connect(this._masterChannel.input);
        return this._mixChannels[channelName];
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
        console.log('createChannelStrip name', name);
        console.log('createChannelStrip effects', effects);
        console.log('createChannelStrip channelName', channelName);
        this._channelStrips[name] = new ChannelStrip(this._masterContext, effects);
        this._channelStrips[name].output.connect(this._channelToConnectNode(channelName));
        return this._channelStrips[name];
    };
    // TO DO : Pouvoir passer un objet channel
    AudioEngine.prototype._channelToConnectNode = function (channelName) {
        console.log('_channelToConnectNode channelName', channelName);
        return channelName === 'master'
            ? this._masterChannel.input
            : Object.keys(this._mixChannels).some(function (key) { return key === channelName; })
                ? this._mixChannels[channelName].input
                : Object.keys(this._channelStrips).some(function (key) { return key === channelName; })
                    ? this._channelStrips[channelName].input
                    : this._masterChannel.input;
    };
    return AudioEngine;
}());
export { AudioEngine };
//# sourceMappingURL=AudioEngine.js.map