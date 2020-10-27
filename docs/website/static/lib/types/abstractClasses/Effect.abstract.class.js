"use strict";
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
exports.Effect = void 0;
var utils_1 = require("../../utils");
/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Classname
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
var Effect = /** @class */ (function () {
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Effect(name, _context, options) {
        this.name = name;
        this._context = _context;
        this._input = new GainNode(this._context);
        this._output = new GainNode(this._context);
        if (name === '_3BandEQ') {
            this.options = __assign({ breakPoints: { lowMid: 200, midHigh: 2000 }, Q: 1, detune: 0 }, options);
        }
        else if (name === 'Delay') {
            this.options = __assign({ delayTime: 0.5, feedback: 0.5 }, options);
        }
        else if (name === 'Distortion') {
            this.options = __assign({ curve: utils_1.makeDistortionCurve(), oversample: '2x' }, options);
        }
        else if (name === 'Filter') {
            this.options = __assign({ type: 'lowpass', frequency: 500, Q: 1, detune: 0, gain: 1 }, options);
        }
        else if (name === 'Pan') {
            this.options = __assign({ pan: 0 }, options);
        }
        else if (name === 'Reverb') {
            this.options = __assign({ seconds: 3, decay: 2, reverse: false }, options);
        }
    }
    Object.defineProperty(Effect.prototype, "input", {
        /**
         * Get the efect input.
         *
         * @see  Function
         *
         * @return {type} Return the effect input.
         */
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Effect.prototype, "output", {
        /**
         * Get the effect output.
         *
         * @see  Function
         *
         * @return {type} Return the effect output.
         */
        get: function () {
            return this._output;
        },
        enumerable: false,
        configurable: true
    });
    // get options() {
    //   return {};
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
    // connect(effect: Effect<EffectOptions>): AudioNode;
    // connect(channel: Channel): AudioNode;
    // connect(node: AudioNode): AudioNode;
    Effect.prototype.connect = function (item) {
        if ('input' in item && 'output' in item) {
            this._output.connect(item.input);
            return item.output;
        }
        else {
            return this._output.connect(item);
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
    Effect.prototype.setGain = function (value) {
        this._output.gain.value = value;
    };
    return Effect;
}());
exports.Effect = Effect;
//# sourceMappingURL=Effect.abstract.class.js.map