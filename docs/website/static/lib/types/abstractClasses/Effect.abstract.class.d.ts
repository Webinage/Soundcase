import { Channel } from '.';
import { EffectOptions, EffectsNames } from '..';
/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Classname
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export declare abstract class Effect<OT> {
    protected name: EffectsNames;
    protected _context: AudioContext;
    protected options: OT;
    protected _output: GainNode;
    protected _input: GainNode;
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor(name: EffectsNames, _context: AudioContext, options: OT);
    /**
     * Get the efect input.
     *
     * @see  Function
     *
     * @return {type} Return the effect input.
     */
    get input(): GainNode;
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
    setGain(value: number): void;
}
