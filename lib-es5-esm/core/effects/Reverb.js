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
import { buildImpulse } from '../../utils';
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
var Reverb = /** @class */ (function (_super) {
    __extends(Reverb, _super);
    /**
     * Create a point.
     * @param {AudioContext} context
     * @param {ReverbOptions} opts
     * @param {number} opts.seconds
     * @param {number} opts.decay
     * @param {boolean} opts.reverse
     */
    function Reverb(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, 'Reverb', _context, options) || this;
        _this._reverbNode = new ConvolverNode(_this._context, {
            buffer: buildImpulse(_this.options)
        });
        _this._rootWetChannel();
        return _this;
    }
    /**
     * Set the low/mid frequency breakpoint
     *
     * @see  Function
     *
     * @param {number}   value    Value of the frequency breakpoitn.
     */
    Reverb.prototype._rootWetChannel = function () {
        this._wetChannel.input
            .connect(this._reverbNode)
            .connect(this._wetChannel.output);
    };
    // /**
    //  * Set the low/mid frequency breakpoint
    //  *
    //  */
    // get seconds(): AudioParam {
    //   return this._reverbNode;
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
    Reverb.prototype.setSeconds = function (seconds) {
        this._updateOptions({ seconds: seconds });
        this._reverbNode.buffer = buildImpulse(this.options);
    };
    //   /**
    //   * Set the low/mid frequency breakpoint
    //   *
    //   */
    //  get decay() {
    //    return this._reverbNode;
    //  }
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
    Reverb.prototype.setDecay = function (decay) {
        this._updateOptions({ decay: decay });
        this._reverbNode.buffer = buildImpulse(this.options);
    };
    //   /**
    //  * Set the low/mid frequency breakpoint
    //  *
    //  */
    // get reverse() {
    //   return this._reverbNode;
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
    Reverb.prototype.setReverse = function (reverse) {
        this._updateOptions({ reverse: reverse });
        this._reverbNode.buffer = buildImpulse(this.options);
    };
    return Reverb;
}(Effect));
export { Reverb };
//# sourceMappingURL=Reverb.js.map