import { Effect, ReverbOptions } from '../../types';
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
export declare class Reverb extends Effect<ReverbOptions> {
    private _dryChannel;
    private _effectChannel;
    private _node;
    private _dryWetRatio;
    /**
     * Create a point.
     * @param {AudioContext} context
     * @param {ReverbOptions} opts
     * @param {number} opts.seconds
     * @param {number} opts.decay
     * @param {boolean} opts.reverse
     */
    constructor(_context: AudioContext, options?: ReverbOptions, dryWetRatio?: number);
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
    setSeconds(seconds: number): void;
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
    setDecay(decay: number): void;
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
    setReverse(reverse: boolean): void;
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
    setDryWetRatio(ratio: number): void;
    /**
     * Utility function for building an impulse response from the options parameters.
     *
     * Based on https://github.com/web-audio-components/simple-reverb _buildImpulse for reverb method
     *
     * @param {ReverbOptions}   options   The reverb options that will be used to generate the impulse.
     *
     * @return {AudioBuffer}    Rutrn an audio buffer.
     */
    private _buildImpulse;
}
