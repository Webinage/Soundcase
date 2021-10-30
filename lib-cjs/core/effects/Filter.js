"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
var abstractClasses_1 = require("../../types/abstractClasses");
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
var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Filter(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, 'Filter', _context, options) || this;
        _this._filterNode = new BiquadFilterNode(_this._context, _this.options);
        _this._rootWetChannel();
        return _this;
    }
    /**
     *
     * @see function
     * @param {number}  value Value of the ....
     */
    Filter.prototype._rootWetChannel = function () {
        this._wetChannel.input.connect(this._filterNode).connect(this._wetChannel.output);
    };
    Object.defineProperty(Filter.prototype, "frequency", {
        /**
         * Set the low/mid frequency breakpoint
         *
         */
        get: function () {
            return this._filterNode.frequency;
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
    Filter.prototype.setFrequency = function (value) {
        this._updateOptions({ frequency: value });
        this._filterNode.frequency.value = value;
    };
    Object.defineProperty(Filter.prototype, "Q", {
        /**
         * Set the low/mid frequency breakpoint
         *
         */
        get: function () {
            return this._filterNode.Q;
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
    Filter.prototype.setQ = function (value) {
        this._updateOptions({ Q: value });
        this._filterNode.Q.value = this.options.Q;
    };
    Object.defineProperty(Filter.prototype, "gain", {
        /**
         * Set the gain level
         *
         */
        get: function () {
            return this._filterNode.gain;
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
    Filter.prototype.setGain = function (value) {
        this._updateOptions({ gain: value });
        this._filterNode.gain.value = this.options.gain;
    };
    Object.defineProperty(Filter.prototype, "detune", {
        /**
         * Set the low/mid frequency breakpoint
         *
         */
        get: function () {
            return this._filterNode.detune;
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
    Filter.prototype.setDetune = function (value) {
        this._updateOptions({ detune: value });
        this._filterNode.detune.value = this.options.detune;
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
    Filter.prototype.setFilterType = function (value) {
        this._updateOptions({ type: value });
        this._filterNode.type = this.options.type;
    };
    return Filter;
}(abstractClasses_1.Effect));
exports.Filter = Filter;
//# sourceMappingURL=Filter.js.map