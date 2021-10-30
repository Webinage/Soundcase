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
import { MixChannel } from '../../core/channels';
import { clamp, makeDistortionCurve } from '../../utils';
import { HasOptions } from './HasOptions.abstract';
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
var Effect = /** @class */ (function (_super) {
    __extends(Effect, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Effect(name, _context, options) {
        var _this = 
        // super(options);
        _super.call(this) || this;
        _this.name = name;
        _this._context = _context;
        if (name === '_3BandEQ') {
            _this._updateOptions(__assign({
                muted: false,
                dryWet: 1,
                gain: 1,
                breakPoints: {
                    lowMid: 200,
                    midHigh: 2000
                },
                low: {
                    gain: 1,
                    Q: 1,
                    detune: 0
                },
                mid: {
                    gain: 1,
                    Q: 1,
                    detune: 0
                },
                high: {
                    gain: 1,
                    Q: 1,
                    detune: 0
                }
            }, options));
        }
        else if (name === 'Delay') {
            _this._updateOptions(__assign({
                muted: false,
                dryWet: 0.5,
                gain: 1,
                delayTime: 0.5,
                feedback: 0.5
            }, options));
        }
        else if (name === 'Distortion') {
            _this._updateOptions(__assign({
                muted: false,
                dryWet: 1,
                gain: 1,
                curve: makeDistortionCurve(100, _this._context.sampleRate),
                oversample: '2x'
            }, options));
        }
        else if (name === 'Filter') {
            _this._updateOptions(__assign({
                muted: false,
                dryWet: 1,
                gain: 1,
                type: 'lowpass',
                frequency: 400,
                Q: 10,
                detune: 0
            }, options));
        }
        else if (name === 'Pan') {
            _this._updateOptions(__assign({ muted: false, dryWet: 1, gain: 1, pan: 0 }, options));
        }
        else if (name === 'Reverb') {
            _this._updateOptions(__assign({
                muted: false,
                dryWet: 0.5,
                gain: 1,
                seconds: 3,
                decay: 2,
                reverse: false
            }, options));
        }
        _this._input = new GainNode(_this._context);
        _this._dryChannel = new MixChannel(_this._context);
        _this._wetChannel = new MixChannel(_this._context);
        _this._output = new GainNode(_this._context);
        _this.setDryWetRatio(_this.options.dryWet);
        // Dry
        _this._input.connect(_this._dryChannel.input).connect(_this._dryChannel.output).connect(_this._output);
        // Wet
        _this._input.connect(_this._wetChannel.input);
        _this._wetChannel.output.connect(_this._output);
        return _this;
        // TO DO trouver le moyen d'executer ca
        // this._rootWetChannel();
    }
    Object.defineProperty(Effect.prototype, "muted", {
        // TO DO trouver le moyen d'executer ca
        // /**
        //  * Get the effect output.
        //  *
        //  * @see  Function
        //  *
        //  * @return {type} Return the effect output.
        //  */
        // abstract _rootWetChannel(): void;
        /**
         * Get the muted effect status.
         *
         * @see  Function
         *
         * @return {type} Return the muted effect status.
         */
        get: function () {
            return this.options.muted;
        },
        /**
         * Get the muted effect status.
         *
         * @see  Function
         *
         * @return {type} Return the muted effect status.
         */
        set: function (value) {
            // this._updateOptions({ muted: value } as EffectOptions);
            this._updateOptions({ muted: value });
            // TO DO : Router l'input dans l'output si false et inversement
            if (this.options.muted === true) {
                // this._input.disconnect();
                // this._input.connect(this._dryChannel.input);
                this._input.disconnect(this._wetChannel.input);
            }
            else {
                this._input.connect(this._wetChannel.input);
            }
        },
        enumerable: false,
        configurable: true
    });
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
    Effect.prototype.disconnect = function () {
        return this._output.disconnect();
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
        this._updateOptions({ outputGain: value });
        this._output.gain.value = value;
    };
    // /**
    //  * Set the low/mid frequency breakpoint
    //  *
    //  */
    // get dryWet() {
    //   return this._delayNode.delayTime;
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
    Effect.prototype.setDryWetRatio = function (ratio) {
        this._updateOptions({ dryWet: clamp(ratio, 0, 1) });
        this._dryChannel.output.gain.value = 1 - this.options.dryWet;
        this._wetChannel.output.gain.value = this.options.dryWet;
    };
    return Effect;
}(HasOptions));
export { Effect };
//# sourceMappingURL=Effect.abstract.class.js.map