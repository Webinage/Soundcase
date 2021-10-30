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
import { clamp } from '../../utils';
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
var Pan = /** @class */ (function (_super) {
    __extends(Pan, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Pan(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, 'Pan', _context, options) || this;
        _this._pannerNode = new StereoPannerNode(_this._context, _this.options);
        _this._rootWetChannel();
        return _this;
    }
    /**
     *
     * @see function
     * @param {number}  value Value of the ....
     */
    Pan.prototype._rootWetChannel = function () {
        this._wetChannel.input
            .connect(this._pannerNode)
            .connect(this._wetChannel.output);
    };
    Object.defineProperty(Pan.prototype, "pan", {
        /**
         * Set the low/mid frequency breakpoint
         *
         */
        get: function () {
            return this._pannerNode.pan;
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
    Pan.prototype.setPan = function (value) {
        this._updateOptions({ pan: clamp(value, -1, 1) });
        this._pannerNode.pan.value = this.options.pan;
    };
    return Pan;
}(Effect));
export { Pan };
//# sourceMappingURL=Pan.js.map