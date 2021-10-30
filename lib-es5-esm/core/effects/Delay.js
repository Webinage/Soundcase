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
    function Delay(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, 'Delay', _context, options) || this;
        _this._delayNode = new DelayNode(_this._context, _this.options);
        _this._feedbackNode = new GainNode(_this._context);
        _this.setFeedback(_this.options.feedback);
        // Feedback
        _this._delayNode.connect(_this._feedbackNode).connect(_this._delayNode);
        // this._output.connect(this._context.destination);
        _this._rootWetChannel();
        return _this;
    }
    /**
     *
     * @see function
     * @param {number}  value Value of the ....
     */
    Delay.prototype._rootWetChannel = function () {
        this._wetChannel.input
            .connect(this._delayNode)
            .connect(this._wetChannel.output);
    };
    Object.defineProperty(Delay.prototype, "delayTime", {
        /**
         * Set the low/mid frequency breakpoint
         *
         */
        get: function () {
            return this._delayNode.delayTime;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the delay time.
     *
     * @see  Function
     *
     * @param {number}    delayTime   Delay time in seconds.
     */
    Delay.prototype.setDelayTime = function (delayTime) {
        this._updateOptions({ delayTime: clamp(delayTime, 0) });
        this._delayNode.delayTime.value = this.options.delayTime;
    };
    Object.defineProperty(Delay.prototype, "feedback", {
        /**
         * Set the low/mid frequency breakpoint
         *
         */
        get: function () {
            return this._feedbackNode.gain;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the delay feedback gain.
     *
     * @see  Function
     *
     * @param {number}   value    Feedback gain. 1 is 100%.
     */
    Delay.prototype.setFeedback = function (value) {
        this._updateOptions({ feedback: clamp(value, 0, 1) });
        this._feedbackNode.gain.value = this.options.feedback;
    };
    return Delay;
}(Effect));
export { Delay };
//# sourceMappingURL=Delay.js.map