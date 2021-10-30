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
exports.Oscillator = void 0;
var abstractClasses_1 = require("../../types/abstractClasses");
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
var Oscillator = /** @class */ (function (_super) {
    __extends(Oscillator, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Oscillator(_context, options) {
        if (options === void 0) { options = {}; }
        var _this = 
        // super(options);
        _super.call(this) || this;
        _this._context = _context;
        _this._voices = [];
        _this._output = new GainNode(_this._context);
        _this._updateOptions(__assign({
            type: 'square',
            numberOfVoices: 1
        }, options));
        return _this;
    }
    Object.defineProperty(Oscillator.prototype, "gain", {
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
        get: function () {
            return this._output.gain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Oscillator.prototype, "detune", {
        /**
         * Get the effect output.
         *
         * @see  Function
         *
         * @param  {type} name Description
         *
         * @return {type} Description.
         */
        set: function (value) {
            this._updateOptions({ detune: value });
            this._voices.forEach(function (voice) {
                voice.oscillator.detune.value = utils_1.clamp(value, 0, 100);
            });
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
    Oscillator.prototype.connect = function (item) {
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
    Oscillator.prototype.disconnect = function () {
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
    // TO DO Overload de méthode
    Oscillator.prototype.play = function (
    // note: MidiNotes | InternationalNotes | number,
    input
    // velocity?: number,
    // duration?: number
    ) {
        var _this = this;
        var notes = typeof input === 'number' ? [input] : input;
        notes.forEach(function (note) {
            var isPresentInVoices = _this._voices.findIndex(function (oscillator) { return oscillator.note === note; }) >= 0;
            var voicesIsFull = _this._voices.length >= _this.options.numberOfVoices;
            if (!isPresentInVoices && !voicesIsFull) {
                var oscillator = new OscillatorNode(_this._context);
                oscillator.type = _this.options.type;
                oscillator.frequency.value = note;
                oscillator.connect(_this._output);
                _this._voices.push({
                    note: note,
                    oscillator: oscillator
                });
                oscillator.start();
            }
            else if (_this.options.numberOfVoices === 1) {
                _this._voices[0].oscillator.frequency.value = note;
            }
        });
        console.log('PLAY this._voices : ', this._voices);
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
    Oscillator.prototype.stop = function (note, after) {
        var _this = this;
        console.log('0');
        if (note) {
            console.log('1');
            var presentVoiceIndex_1 = this._voices.findIndex(function (oscillator) { return oscillator.note === note; });
            console.log('presentVoiceIndex : ', presentVoiceIndex_1);
            if (presentVoiceIndex_1 >= 0) {
                console.log('3');
                if (after) {
                    console.log('5');
                    setTimeout(function () {
                        _this._voices[presentVoiceIndex_1].oscillator.stop();
                        _this._voices.splice(presentVoiceIndex_1, 1);
                        // this._voices = this._voices.filter(voice => voice.note == note);
                    }, after);
                }
                else {
                    console.log('6');
                    this._voices[presentVoiceIndex_1].oscillator.stop();
                    this._voices.splice(presentVoiceIndex_1, 1);
                    // this._voices = this._voices.filter(voice => voice.note == note);
                }
            }
            else if (this.options.numberOfVoices === 1) {
                console.log('4');
                this._voices[0].oscillator.stop();
                // this._voices.splice(0, 1);
                // this._voices.pop();
                this._voices = [];
            }
        }
        else {
            console.log('2');
            this._voices.forEach(function (voice) {
                voice.oscillator.stop();
            });
            this._voices = [];
        }
        console.log('STOP this._voices : ', this._voices);
    };
    return Oscillator;
}(abstractClasses_1.HasOptions));
exports.Oscillator = Oscillator;
//# sourceMappingURL=Oscillator.class.js.map