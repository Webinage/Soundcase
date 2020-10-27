"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pan = void 0;
var types_1 = require("../../types");
var utils_1 = require("../../utils");
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
        _this._node = new StereoPannerNode(_this._context, options);
        _this._input.connect(_this._node).connect(_this._output);
        return _this;
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
    Pan.prototype.setPan = function (value) {
        this._node.pan.value = utils_1.keepNumberBetwwen(value, -1, 1);
    };
    return Pan;
}(types_1.Effect));
exports.Pan = Pan;
//# sourceMappingURL=Pan.js.map