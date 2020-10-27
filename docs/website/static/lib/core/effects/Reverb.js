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
exports.Reverb = void 0;
var types_1 = require("../../types");
var utils_1 = require("../../utils");
var channels_1 = require("../channels");
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
var Reverb = /** @class */ (function (_super) {
    __extends(Reverb, _super);
    /**
     * Create a point.
     * @param {AudioContext} context
     * @param {ReverbOptions} opts
     * @param {number} opts.seconds
     * @param {number} opts.decay
     * @param {boolean} opts.reverse
     */
    function Reverb(_context, options, dryWetRatio) {
        if (options === void 0) { options = {}; }
        if (dryWetRatio === void 0) { dryWetRatio = 0.5; }
        var _this = _super.call(this, 'Reverb', _context, options) || this;
        _this._dryChannel = new channels_1.MixChannel(_this._context);
        _this._effectChannel = new channels_1.MixChannel(_this._context);
        _this.setDryWetRatio(dryWetRatio);
        _this._node = new ConvolverNode(_this._context, {
            buffer: _this._buildImpulse(_this.options)
        });
        _this._input
            .connect(_this._dryChannel.input)
            .connect(_this._dryChannel.output)
            .connect(_this._output);
        _this._input
            .connect(_this._effectChannel.input)
            .connect(_this._node)
            .connect(_this._effectChannel.output)
            .connect(_this._output);
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
    Reverb.prototype.setSeconds = function (seconds) {
        this.options.seconds = seconds;
        this._node.buffer = this._buildImpulse(this.options);
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
    Reverb.prototype.setDecay = function (decay) {
        this.options.decay = decay;
        this._node.buffer = this._buildImpulse(this.options);
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
    Reverb.prototype.setReverse = function (reverse) {
        this.options.reverse = reverse;
        this._node.buffer = this._buildImpulse(this.options);
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
    Reverb.prototype.setDryWetRatio = function (ratio) {
        this._dryWetRatio = utils_1.keepNumberBetwwen(ratio, 0, 1);
        this._dryChannel.output.gain.value = 1 - this._dryWetRatio;
        this._effectChannel.output.gain.value = this._dryWetRatio;
    };
    /**
     * Utility function for building an impulse response from the options parameters.
     *
     * Based on https://github.com/web-audio-components/simple-reverb _buildImpulse for reverb method
     *
     * @param {ReverbOptions}   options   The reverb options that will be used to generate the impulse.
     *
     * @return {AudioBuffer}    Rutrn an audio buffer.
     */
    Reverb.prototype._buildImpulse = function (options) {
        var rate = this._context.sampleRate, length = rate * options.seconds, decay = options.decay, impulse = this._context.createBuffer(2, length, rate), impulseL = impulse.getChannelData(0), impulseR = impulse.getChannelData(1);
        var n, i;
        for (i = 0; i < length; i++) {
            n = options.reverse ? length - i : i;
            impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
            impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
        }
        return impulse;
    };
    return Reverb;
}(types_1.Effect));
exports.Reverb = Reverb;
//# sourceMappingURL=Reverb.js.map