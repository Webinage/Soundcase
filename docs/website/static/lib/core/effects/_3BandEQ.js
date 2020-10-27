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
exports._3BandEQ = void 0;
var types_1 = require("../../types");
var utils_1 = require("../../utils");
var channels_1 = require("../channels");
/**
 * A 3 band equalizer
 *
 *  @class _3BandEQ
 *  @extends Effect
 *  @constructor
 * @augments parent
 *
 * @return {_3BandEQ} Return a _3BandEQ
 */
var _3BandEQ = /** @class */ (function (_super) {
    __extends(_3BandEQ, _super);
    /**
     * Create a _3BandEQ.
     * @param {AudioContext} _context  The audio context the effect will run in.
     * @param {_3BandEQOptions} options  The options the effect will be created with.
     */
    function _3BandEQ(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, '_3BandEQ', _context, options) || this;
        // this._effectContext = new EffectContext()
        _this._lowFilterChannel = new channels_1.MixChannel(_this._context);
        _this._midFilterChannel = new channels_1.MixChannel(_this._context);
        _this._highFilterChannel = new channels_1.MixChannel(_this._context);
        _this._lowFilterNode = new BiquadFilterNode(_this._context, {
            // Q: options.Q,
            detune: options.detune,
            frequency: _this.options.breakPoints.lowMid,
            type: 'lowpass'
        });
        _this._midFilterNode = new BiquadFilterNode(_this._context, {
            // Q: options.Q,
            detune: options.detune,
            frequency: (_this.options.breakPoints.lowMid + _this.options.breakPoints.midHigh) /
                2,
            type: 'bandpass'
        });
        _this._highFilterNode = new BiquadFilterNode(_this._context, {
            // Q: options.Q,
            detune: options.detune,
            frequency: _this.options.breakPoints.midHigh,
            type: 'highpass'
        });
        _this._input
            .connect(_this._lowFilterNode)
            .connect(_this._lowFilterChannel.input)
            .connect(_this._lowFilterChannel.output)
            .connect(_this._output);
        _this._input
            .connect(_this._midFilterNode)
            .connect(_this._midFilterChannel.input)
            .connect(_this._midFilterChannel.output)
            .connect(_this._output);
        _this._input
            .connect(_this._highFilterNode)
            .connect(_this._highFilterChannel.input)
            .connect(_this._highFilterChannel.output)
            .connect(_this._output);
        return _this;
    }
    /**
     * Set the low/mid frequency breakpoint
     *
     * @see  Function
     *
     * @param {number}   value    Value of the frequency breakpoitn.
     */
    _3BandEQ.prototype.setLowMidFrequencyBreakpoint = function (value) {
        this.options.breakPoints.lowMid = utils_1.keepNumberBetwwen(value, 0, this.options.breakPoints.midHigh);
        this._lowFilterNode.frequency.value = this.options.breakPoints.lowMid;
        this._midFilterNode.frequency.value =
            (this.options.breakPoints.lowMid + this.options.breakPoints.midHigh) / 2;
    };
    /**
     * Set the low/mid frequency breakpoint
     *
     * @see  Function
     *
     * @param {number}   value    Value of the frequency breakpoitn.
     */
    _3BandEQ.prototype.setMidHighFrequencyBreakpoint = function (value) {
        this.options.breakPoints.lowMid = utils_1.keepNumberBetwwen(value, this.options.breakPoints.midHigh, 20000);
        this._midFilterNode.frequency.value =
            (this.options.breakPoints.lowMid + this.options.breakPoints.midHigh) / 2;
        this._highFilterNode.frequency.value = this.options.breakPoints.midHigh;
    };
    /**
     * Set the gain for the low frequency band
     *
     * @see  Function
     *
     * @param {number}   value    Gain value. 1 is for 100%
     */
    _3BandEQ.prototype.setLowGain = function (value) {
        this._lowFilterChannel.output.gain.value = value;
    };
    /**
     * Set the Q for the low frequency band.
     *
     * @see  Function
     *
     * @param {number}   value    Q value.
     */
    _3BandEQ.prototype.setLowQ = function (value) {
        this._lowFilterNode.Q.value = value;
    };
    /**
     * Set the gain for the mid frequency band
     *
     * @see  Function
     *
     * @param {number}   value    Gain value. 1 is for 100%
     */
    _3BandEQ.prototype.setMidGain = function (value) {
        this._midFilterChannel.output.gain.value = value;
    };
    /**
     * Set the Q for the mid frequency band.
     *
     * @see  Function
     *
     * @param {number}   value    Q value.
     */
    _3BandEQ.prototype.setMidQ = function (value) {
        this._midFilterNode.Q.value = value;
    };
    /**
     * Set the gain for the high frequency band
     *
     * @see  Function
     *
     * @param {number}   value    Gain value. 1 is for 100%
     */
    _3BandEQ.prototype.setHighGain = function (value) {
        this._highFilterChannel.output.gain.value = value;
    };
    /**
     * Set the Q for the high frequency band.
     *
     * @see  Function
     *
     * @param {number}   value    Q value.
     */
    _3BandEQ.prototype.setHighQ = function (value) {
        this._highFilterNode.Q.value = value;
    };
    return _3BandEQ;
}(types_1.Effect));
exports._3BandEQ = _3BandEQ;
//# sourceMappingURL=_3BandEQ.js.map