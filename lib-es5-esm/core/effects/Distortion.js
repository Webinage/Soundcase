var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Distortion = /** @class */ (function (_super) {
    __extends(Distortion, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Distortion(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, 'Distortion', _context, options) || this;
        _this._waveShaperNode = new WaveShaperNode(_this._context, _this.options);
        _this._rootWetChannel();
        return _this;
    }
    /**
     *
     * @see function
     * @param {number}  value Value of the ....
     */
    Distortion.prototype._rootWetChannel = function () {
        this._wetChannel.input
            .connect(this._waveShaperNode)
            .connect(this._wetChannel.output);
    };
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
    Distortion.prototype.setCurve = function (input) {
        if (typeof input === 'number') {
            input = makeDistortionCurve(clamp(input, 0), this._context.sampleRate);
            this._waveShaperNode.curve = input;
        }
        this._updateOptions({ curve: input });
        this._waveShaperNode.curve = this.options.curve;
    };
    Object.defineProperty(Distortion.prototype, "oversample", {
        /**
         * Set the low/mid frequency breakpoint
         *
         */
        get: function () {
            return this._waveShaperNode.oversample;
        },
        enumerable: false,
        configurable: true
    });
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
    Distortion.prototype.setOversample = function (oversample) {
        this._updateOptions({ oversample: oversample });
        this._waveShaperNode.oversample = this.options.oversample;
    };
    return Distortion;
}(Effect));
export { Distortion };
//# sourceMappingURL=Distortion.js.map