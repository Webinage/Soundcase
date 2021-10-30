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
exports._3BandEQ = void 0;
var abstractClasses_1 = require("../../types/abstractClasses");
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
    // private _highFilterChannel: MixChannel;
    /**
     * Create a _3BandEQ.
     * @param {AudioContext} _context  The audio context the effect will run in.
     * @param {_3BandEQOptions} options  The options the effect will be created with.
     */
    function _3BandEQ(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, '_3BandEQ', _context, options) || this;
        // this._effectContext = new EffectContext()
        // this._lowFilterChannel = new MixChannel(this._context);
        // this._midFilterChannel = new MixChannel(this._context);
        // this._highFilterChannel = new MixChannel(this._context);
        _this._lowFilterNode = new BiquadFilterNode(_this._context, {
            // Q: options.Q,
            detune: _this.options.low.detune,
            frequency: _this.options.breakPoints.lowMid,
            type: 'lowpass'
        });
        _this._midLowFilterNode = new BiquadFilterNode(_this._context, {
            // Q: options.Q,
            detune: _this.options.low.detune,
            frequency: _this.options.breakPoints.lowMid,
            type: 'highpass'
        });
        _this._midHighFilterNode = new BiquadFilterNode(_this._context, {
            // Q: options.Q,
            detune: _this.options.low.detune,
            frequency: _this.options.breakPoints.midHigh,
            type: 'lowpass'
        });
        _this._midFilterChannel = new channels_1.ChannelStrip(_this._context, [
            _this._midLowFilterNode,
            _this._midHighFilterNode
        ]);
        _this._highFilterNode = new BiquadFilterNode(_this._context, {
            // Q: options.Q,
            detune: _this.options.low.detune,
            frequency: _this.options.breakPoints.midHigh,
            type: 'highpass'
        });
        _this._rootWetChannel();
        return _this;
    }
    /**
     *
     * @see function
     * @param {number}  value Value of the ....
     */
    _3BandEQ.prototype._rootWetChannel = function () {
        this._wetChannel.input
            .connect(this._lowFilterNode)
            .connect(this._wetChannel.output);
        this._wetChannel.input.connect(this._midFilterChannel.input);
        this._midFilterChannel.output.connect(this._wetChannel.output);
        this._wetChannel.input
            .connect(this._highFilterNode)
            .connect(this._wetChannel.output);
    };
    /**
     * Set the low/mid frequency breakpoint
     *
     * @see  Function
     *
     * @param {number}   value    Value of the frequency breakpoitn.
     */
    _3BandEQ.prototype.setLowMidFrequencyBreakpoint = function (value) {
        this._updateOptions({
            breakPoints: __assign(__assign({}, this.options.breakPoints), { lowMid: value })
        });
        this.options.breakPoints.lowMid = utils_1.clamp(value, 0, this.options.breakPoints.midHigh);
        this._lowFilterNode.frequency.value = this.options.breakPoints.lowMid;
        this._midLowFilterNode.frequency.value =
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
        this._updateOptions({
            breakPoints: __assign(__assign({}, this.options.breakPoints), { midHigh: value })
        });
        this.options.breakPoints.lowMid = utils_1.clamp(value, this.options.breakPoints.midHigh, 20000);
        this._midHighFilterNode.frequency.value =
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
        this._updateOptions({ low: __assign(__assign({}, this.options.low), { gain: value }) });
        // this._lowFilterChannel.output.gain.value = value;
        this._lowFilterNode.gain.value = value;
    };
    // /**
    //  * Set the Q for the low frequency band.
    //  *
    //  * @see  Function
    //  *
    //  * @param {number}   value    Q value.
    //  */
    // setLowQ(value: number) {
    //   this._lowFilterNode.Q.value = value;
    // }
    // /**
    //  * Set the Q for the low frequency band.
    //  *
    //  * @see  Function
    //  *
    //  * @param {number}   value    Q value.
    //  */
    // setLowQ(value: number) {
    //   this._lowFilterNode.Q.value = value;
    // }
    /**
     * Set the gain for the mid frequency band
     *
     * @see  Function
     *
     * @param {number}   value    Gain value. 1 is for 100%
     */
    _3BandEQ.prototype.setMidGain = function (value) {
        this._updateOptions({ mid: __assign(__assign({}, this.options.mid), { gain: value }) });
        this._midFilterChannel.setGain(value);
    };
    // /**
    //  * Set the Q for the mid frequency band.
    //  *
    //  * @see  Function
    //  *
    //  * @param {number}   value    Q value.
    //  */
    // setMidQ(value: number) {
    //   this._midFilterNode.Q.value = value;
    // }
    // /**
    //  * Set the Q for the mid frequency band.
    //  *
    //  * @see  Function
    //  *
    //  * @param {number}   value    Q value.
    //  */
    // setMidQ(value: number) {
    //   this._midFilterNode.Q.value = value;
    // }
    /**
     * Set the gain for the high frequency band
     *
     * @see  Function
     *
     * @param {number}   value    Gain value. 1 is for 100%
     */
    _3BandEQ.prototype.setHighGain = function (value) {
        this._updateOptions({ high: __assign(__assign({}, this.options.high), { gain: value }) });
        this._highFilterNode.gain.value = value;
    };
    return _3BandEQ;
}(abstractClasses_1.Effect));
exports._3BandEQ = _3BandEQ;
//# sourceMappingURL=_3BandEQ.js.map