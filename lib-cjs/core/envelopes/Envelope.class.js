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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Envelope = void 0;
var abstractClasses_1 = require("../../types/abstractClasses");
var utils_1 = require("../../utils");
var Envelope = /** @class */ (function (_super) {
    __extends(Envelope, _super);
    function Envelope(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = 
        // super(options);
        _super.call(this) || this;
        _this._context = _context;
        _this.params = [];
        _this._updateOptions(__assign({
            muted: false,
            envelopeType: 'exponential',
            attackTime: 10,
            decayTime: 200,
            sustainValue: 0.25,
            releaseTime: 1000
        }, options));
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
    Envelope.prototype.bind = function (param, minValue, maxValue) {
        if (minValue === void 0) { minValue = 0; }
        if (maxValue === void 0) { maxValue = 1; }
        this.params.push({ param: param, minValue: minValue, maxValue: maxValue });
        // return () => this.disconnect(param);
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
    Envelope.prototype.disconnect = function (param) {
        this.params = this.params.filter(function (p) { return p.param !== param; });
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
    Envelope.prototype.trigger = function () {
        var _this = this;
        this.params.forEach(function (param) {
            var now = _this._context.currentTime;
            param.param.cancelScheduledValues(now);
            param.param.setValueAtTime(param.minValue, now);
            if (_this.options.envelopeType === 'exponential') {
                param.param.exponentialRampToValueAtTime(param.maxValue, now + utils_1.millisecondsToSeconds(utils_1.clamp(_this.options.attackTime, 0)));
                param.param.exponentialRampToValueAtTime(_this.options.sustainValue, now + utils_1.millisecondsToSeconds(utils_1.clamp(_this.options.attackTime + _this.options.decayTime, 0)));
            }
            else {
                param.param.linearRampToValueAtTime(param.maxValue, now + utils_1.millisecondsToSeconds(utils_1.clamp(_this.options.attackTime, 0)));
                param.param.linearRampToValueAtTime(_this.options.sustainValue, now + utils_1.millisecondsToSeconds(utils_1.clamp(_this.options.attackTime + _this.options.decayTime, 0)));
            }
        });
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
    Envelope.prototype.release = function () {
        var _this = this;
        this.params.forEach(function (param) {
            var now = _this._context.currentTime;
            param.param.cancelScheduledValues(now);
            param.param.setValueAtTime(_this.options.sustainValue, now);
            if (_this.options.envelopeType === 'exponential') {
                param.param.exponentialRampToValueAtTime(utils_1.clamp(param.minValue, 0.01), now + utils_1.millisecondsToSeconds(_this.options.releaseTime));
            }
            else {
                param.param.linearRampToValueAtTime(utils_1.clamp(param.minValue, 0), now + utils_1.millisecondsToSeconds(_this.options.releaseTime));
            }
        });
    };
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    Envelope.prototype.setMuted = function (value) {
        this._updateOptions({ muted: value });
    };
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    Envelope.prototype.setEnvelopeType = function (value) {
        this._updateOptions({ envelopeType: value });
    };
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    Envelope.prototype.setAttackTime = function (value) {
        this._updateOptions({ attackTime: utils_1.clamp(value, 0) });
    };
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    Envelope.prototype.setDecayTime = function (value) {
        this._updateOptions({ decayTime: utils_1.clamp(value, 0) });
    };
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    Envelope.prototype.setSustainValue = function (value) {
        this._updateOptions({ sustainValue: utils_1.clamp(value, 0) });
    };
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     */
    Envelope.prototype.setReleaseTime = function (value) {
        this._updateOptions({ releaseTime: utils_1.clamp(value, 0) });
    };
    return Envelope;
}(abstractClasses_1.HasOptions));
exports.Envelope = Envelope;
//# sourceMappingURL=Envelope.class.js.map