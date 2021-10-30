var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
export class AudioEngine {
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor() {
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
    get masterChannel() {
        return this._masterChannel;
    }
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
    get mixChannels() {
        return this._mixChannels;
    }
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
    getMixChannel(channelName) {
        return this._mixChannels[channelName];
    }
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
    get channelStrips() {
        return this._channelStrips;
    }
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
    getChannelStrip(channelName) {
        return this._channelStrips[channelName];
    }
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
    get soundPlayers() {
        return this._soundPlayers;
    }
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
    getSoundPlayer(playerName) {
        return this._soundPlayers[playerName];
    }
    /**
     *
     * @returns
     */
    getAudioInput(audioInputName) {
        return this._audioInputs[audioInputName];
    }
    getAduioInputSources() {
        return __awaiter(this, void 0, void 0, function* () {
            return new window.InputDeviceInfo();
        });
    }
    /**
     *
     * @returns
     */
    createAudioInput(audioInputName) {
        this._audioInputs[audioInputName] = new AudioInput(this._masterContext);
        return this._audioInputs[audioInputName];
    }
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
    createSoundPlayer(playerName, sounds, channelName = 'master') {
        this._soundPlayers[playerName] = new SoundPlayer(this._masterContext, sounds, this._channelToConnectNode(channelName));
        // conect to master channel
        return this._soundPlayers[playerName];
    }
    createEffect(effectType, options = {}) {
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
    }
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
    createMixChannel(channelName) {
        this._mixChannels[channelName] = new MixChannel(this._masterContext);
        this._mixChannels[channelName].output.connect(this._masterChannel.input);
        return this._mixChannels[channelName];
    }
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
    createChannelStrip(name, effects = [], channelName = 'master') {
        console.log('createChannelStrip name', name);
        console.log('createChannelStrip effects', effects);
        console.log('createChannelStrip channelName', channelName);
        this._channelStrips[name] = new ChannelStrip(this._masterContext, effects);
        this._channelStrips[name].output.connect(this._channelToConnectNode(channelName));
        return this._channelStrips[name];
    }
    // TO DO : Pouvoir passer un objet channel
    _channelToConnectNode(channelName) {
        console.log('_channelToConnectNode channelName', channelName);
        return channelName === 'master'
            ? this._masterChannel.input
            : Object.keys(this._mixChannels).some(key => key === channelName)
                ? this._mixChannels[channelName].input
                : Object.keys(this._channelStrips).some(key => key === channelName)
                    ? this._channelStrips[channelName].input
                    : this._masterChannel.input;
    }
}
//# sourceMappingURL=AudioEngine.js.map