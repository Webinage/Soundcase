import { DistortionOptions, Effect, EffectOptions, FilterOptions, MyDelayOptions, PanOptions, ReverbOptions, SoundsLibrary, _3BandEQOptions } from '../types';
import { ChannelStrip, MixChannel } from './channels';
import { Delay, Distortion, Filter, Pan, Reverb, _3BandEQ } from './effects';
import { SoundPlayer } from './instruments';
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
    private _masterContext;
    private _masterChannel;
    private _mixChannels;
    private _channelStrips;
    private _soundPlayers;
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
    get mixChannels(): Map<string, MixChannel>;
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
    get channelStrip(): Map<string, ChannelStrip>;
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
    createEffect(effectType: '_3BandEQ', options?: _3BandEQOptions): _3BandEQ;
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
    private channelToConnectNode;
}
