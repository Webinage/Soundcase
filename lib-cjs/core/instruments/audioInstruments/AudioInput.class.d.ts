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
    constructor(_context: AudioContext);
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
}
