import { Effect } from '../types/abstractClasses';
import { DistortionOptions, EffectOptions, FilterOptions, MyDelayOptions, PanOptions, ReverbOptions } from '../types/interfaces';
import { Dic, SoundsLibrary } from '../types/types';
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
export declare class AudioEngine {
    /**
     * Create a MixChannel.
     */
    private _masterContext;
    get masterContext(): AudioContext;
    /**
     * Create a MixChannel.
     */
    private _masterChannel;
    /**
     * Create a MixChannel.
     */
    private _mixChannels;
    /**
     * Create a MixChannel.
     */
    private _channelStrips;
    /**
     * Create a MixChannel.
     */
    private _soundPlayers;
    /**
     * Create an AudioIUnput
     */
    private _audioInputs;
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor();
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
    get masterChannel(): MixChannel;
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
    get mixChannels(): Dic<MixChannel>;
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
    getMixChannel(channelName: string): MixChannel;
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
    get channelStrips(): Dic<ChannelStrip>;
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
    getChannelStrip(channelName: string): ChannelStrip;
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
    get soundPlayers(): Dic<SoundPlayer>;
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
    getSoundPlayer(playerName: string): SoundPlayer;
    /**
     *
     * @returns
     */
    getAudioInput(audioInputName: string): AudioInput;
    getAduioInputSources(): Promise<InputDeviceInfo>;
    /**
     *
     * @returns
     */
    createAudioInput(audioInputName: string, channelName?: string): AudioInput;
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
    createSoundPlayer(playerName: string, sounds: SoundsLibrary, channelName?: string): SoundPlayer;
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
    createEffect(effectType: 'Delay', options?: MyDelayOptions): Delay;
    createEffect(effectType: 'Distortion', options?: DistortionOptions): Distortion;
    createEffect(effectType: 'Filter', options?: FilterOptions): Filter;
    createEffect(effectType: 'Pan', options?: PanOptions): Pan;
    createEffect(effectType: 'Reverb', options?: ReverbOptions): Reverb;
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
    createMixChannel(channelName: string): MixChannel;
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
    createChannelStrip(name: string, effects?: Effect<EffectOptions>[], channelName?: string): ChannelStrip;
    private _channelToConnectNode;
}
