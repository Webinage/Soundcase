import { Effect } from '../types/abstractClasses';
import { Channel } from '../types/abstractClasses/Channel.abstract.class';
import { EffectOptions } from '../types/interfaces';
import { SoundsLibrary } from '../types/types';
/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface SoundElement {
    htmlAudioElement: HTMLAudioElement;
    mediaElementAudioSourceNode: MediaElementAudioSourceNode;
}
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
export declare class SoundPlayer {
    private _context;
    private _soundsLibrary;
    private _audioElements;
    protected _output: GainNode;
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor(_context: AudioContext, _soundsLibrary: SoundsLibrary, item?: AudioNode | Effect<EffectOptions> | Channel);
    /**
     * Summary. (use period)
     *
     * Can connect to one node/channel only
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
    connect(item: AudioNode | Effect<EffectOptions> | Channel): AudioNode;
    setSoundVolume(name: string, volume: number): void;
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
    playSound(name: string): Promise<void>;
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
    pauseSound(name: string): void;
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
    stopSound(name: string): void;
    private _loadSound;
    private _handleSoundLoading;
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
    setGain(value: number): void;
}
