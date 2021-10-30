import { Effect } from '../../types/abstractClasses';
import { clamp, makeDistortionCurve } from '../../utils';
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
export class Distortion extends Effect {
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor(_context, options = {}) {
        super('Distortion', _context, options);
        this._waveShaperNode = new WaveShaperNode(this._context, this.options);
        this._rootWetChannel();
    }
    /**
     *
     * @see function
     * @param {number}  value Value of the ....
     */
    _rootWetChannel() {
        this._wetChannel.input
            .connect(this._waveShaperNode)
            .connect(this._wetChannel.output);
    }
    // /**
    //  * Set the low/mid frequency breakpoint
    //  *
    //  */
    // get curve() {
    //   return this._waveShaperNode.curve;
    // }
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
    setCurve(input) {
        if (typeof input === 'number') {
            input = makeDistortionCurve(clamp(input, 0), this._context.sampleRate);
            this._waveShaperNode.curve = input;
        }
        this._updateOptions({ curve: input });
        this._waveShaperNode.curve = this.options.curve;
    }
    /**
     * Set the low/mid frequency breakpoint
     *
     */
    get oversample() {
        return this._waveShaperNode.oversample;
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
    setOversample(oversample) {
        this._updateOptions({ oversample: oversample });
        this._waveShaperNode.oversample = this.options.oversample;
    }
}
//# sourceMappingURL=Distortion.js.map