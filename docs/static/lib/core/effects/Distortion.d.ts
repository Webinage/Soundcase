import { Effect } from '../../types/abstractClasses';
import { DistortionOptions } from '../../types/interfaces';
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
export declare class Distortion extends Effect<DistortionOptions> {
    private readonly _waveShaperNode;
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor(_context: AudioContext, options?: DistortionOptions);
    /**
     *
     * @see function
     * @param {number}  value Value of the ....
     */
    private _rootWetChannel;
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
    setCurve(input: number | Float32Array): void;
    /**
     * Set the low/mid frequency breakpoint
     *
     */
    get oversample(): OverSampleType;
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
    setOversample(oversample: OverSampleType): void;
}
