import { AudioInstrument } from './AudioInstrument.abstract.class';
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
export declare abstract class Synth extends AudioInstrument {
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor(_context: AudioContext);
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
    private _subscribeToInputs;
    abstract play(input: number | number[]): void;
    abstract stop(input?: number | number[]): void;
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @return {type} Return value description.
     */
    private _unsubscribeToInputs;
}
