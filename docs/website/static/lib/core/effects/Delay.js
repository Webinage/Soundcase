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
exports.Delay = void 0;
var types_1 = require("../../types");
var utils_1 = require("../../utils");
var channels_1 = require("../channels");
/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Delay
 *  @extends Effect
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
var Delay = /** @class */ (function (_super) {
    __extends(Delay, _super);
    /**
     * Create a Delay.
     * @param {AudioContext} _context  The audio context the effect will run in.
     * @param {MyDelayOptions} options  The options the effect will be created with.
     */
    function Delay(_context, options, dryWetRatio) {
        if (options === void 0) { options = {}; }
        if (dryWetRatio === void 0) { dryWetRatio = 0.5; }
        var _this = _super.call(this, 'Delay', _context, options) || this;
        _this._dryChannel = new channels_1.MixChannel(_this._context);
        _this._wetChannel = new channels_1.MixChannel(_this._context);
        _this._channelSplitter = new ChannelSplitterNode(_this._context, {
            numberOfOutputs: 2
        });
        _this._channelMerger = new ChannelMergerNode(_this._context, {
            numberOfInputs: 2
        });
        _this._leftDelayNode = new DelayNode(_this._context, _this.options);
        _this._rightDelayNode = new DelayNode(_this._context, _this.options);
        _this._feedbackNode = new GainNode(_this._context);
        _this.setFeedback(_this.options.feedback);
        _this.setDryWetRatio(dryWetRatio);
        // Dry
        _this._input
            .connect(_this._dryChannel.input)
            .connect(_this._dryChannel.output)
            .connect(_this._output);
        // Wet
        _this._input.connect(_this._channelSplitter);
        _this._channelSplitter
            .connect(_this._leftDelayNode, 0)
            .connect(_this._channelMerger, 0, 0);
        _this._channelSplitter
            .connect(_this._rightDelayNode, 1)
            .connect(_this._channelMerger, 0, 1);
        _this._channelMerger
            .connect(_this._wetChannel.input)
            .connect(_this._wetChannel.output)
            .connect(_this._output);
        // Feedback
        _this._channelMerger
            .connect(_this._feedbackNode)
            .connect(_this._channelSplitter);
        _this._output.connect(_this._context.destination);
        return _this;
    }
    /**
     * Set the effect dry/wet ratio
     *
     * @see  Function
     *
     * @param {number}   ratio    Dry/wet ratio. 1 is for 100%
     */
    Delay.prototype.setDryWetRatio = function (ratio) {
        this._dryWetRatio = utils_1.keepNumberBetwwen(ratio, 0, 1);
        this._dryChannel.output.gain.value = 1 - this._dryWetRatio;
        this._wetChannel.output.gain.value = this._dryWetRatio;
    };
    /**
     * Set the delay time.
     *
     * @see  Function
     *
     * @param {number}    delayTime   Delay time in seconds.
     */
    Delay.prototype.setDelayTime = function (delayTime) {
        this.options.delayTime = delayTime;
        this._leftDelayNode.delayTime.value = delayTime;
        this._rightDelayNode.delayTime.value = delayTime;
    };
    /**
     * Set the delay feedback gain.
     *
     * @see  Function
     *
     * @param {number}   value    Feedback gain. 1 is 100%.
     */
    Delay.prototype.setFeedback = function (value) {
        this._feedbackNode.gain.value = utils_1.keepNumberBetwwen(value, 0, 1);
    };
    return Delay;
}(types_1.Effect));
exports.Delay = Delay;
//# sourceMappingURL=Delay.js.map