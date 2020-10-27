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
exports.Distortion = void 0;
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
var Distortion = /** @class */ (function (_super) {
    __extends(Distortion, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Distortion(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, 'Distortion', _context, options) || this;
        _this._node = new WaveShaperNode(_this._context, options);
        _this._input.connect(_this._node).connect(_this._output);
        return _this;
    }
    Distortion.prototype.setCurve = function (input) {
        if (typeof input === 'number') {
            this._node.curve = utils_1.makeDistortionCurve(input);
        }
        else {
            this._node.curve = input;
        }
    };
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
        this._node.oversample = oversample;
    };
    return Distortion;
}(types_1.Effect));
exports.Distortion = Distortion;
//# sourceMappingURL=Distortion.js.map