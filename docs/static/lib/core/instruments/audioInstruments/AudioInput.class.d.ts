import { Channel, Effect } from '../../../types/abstractClasses';
import { EffectOptions } from '../../../types/interfaces';
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
export declare class AudioInput {
    private _context;
    private _output;
    private _input;
    private _muted;
    /**
     * Create a point.uj;:
     * @param {number} x  The x value.
     */
    constructor(_context: AudioContext, item?: AudioNode | Effect<EffectOptions> | Channel);
    private _init;
    /**
     * Set the gain level
     *
     */
    get gain(): AudioParam;
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
    /**
     * Get the muted effect status.
     *
     * @see  Function
     *
     * @return {type} Return the muted effect status.
     */
    get muted(): boolean;
    /**
     * Get the muted effect status.
     *
     * @see  Function
     *
     * @return {type} Return the muted effect status.
     */
    setMuted(value: boolean): void;
    /**
     * Get the efect input.
     *
     * @see  Function
     *
     * @return {type} Return the effect input.
     */
    get input(): MediaStreamAudioSourceNode;
    /**
     * Get the effect output.
     *
     * @see  Function
     *
     * @return {type} Return the effect output.
     */
    get output(): GainNode;
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
    connect(item: AudioNode | Effect<EffectOptions> | Channel): AudioNode;
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
    disconnect(): void;
}
