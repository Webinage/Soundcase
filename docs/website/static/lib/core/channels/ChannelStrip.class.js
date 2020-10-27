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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelStrip = void 0;
var types_1 = require("../../types");
/**
 * Summary. (A channel to handle single/multiple effects)
 *
 *  @class ChannelStrip
 *  @extends Channel
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return a channel strip.
 */
var ChannelStrip = /** @class */ (function (_super) {
    __extends(ChannelStrip, _super);
    function ChannelStrip(_context, fx) {
        var _this = _super.call(this, _context) || this;
        _this._effects = [];
        if (Array.isArray(fx)) {
            _this.addEffects(fx);
        }
        else {
            _this.addEffect(fx);
        }
        return _this;
    }
    Object.defineProperty(ChannelStrip.prototype, "effects", {
        /**
         * Get channelStrip effects.
         *
         * @return {type} Return an array of Effect.
         */
        get: function () {
            return this._effects;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add one effect in the channelStrip
     *
     * @see  Function/class relied on
     *
     * @param {Effect<EffectOptions>}   effect     The effect you want to add to the channelStrip.
     * @param {number}                  [index]    Description of optional variable.
     */
    ChannelStrip.prototype.addEffect = function (effect, index) {
        if (index) {
            this._effects.splice(index, 0, effect);
        }
        else {
            this._effects.push(effect);
        }
        this.rootEffects();
    };
    /**
     * Remove one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to remove from the channelStrip.
     */
    ChannelStrip.prototype.removeEffect = function (effect) {
        if (typeof effect === 'number') {
            this._effects.splice(effect, 1);
            this.rootEffects();
        }
        // else {
        //   this._effects = this.effects.filter(ef => ef !== effect);
        // }
        // if ('options' in effect) {
        // }
    };
    /**
     * Add multiple effects in the channelStrip
     *
     * @see  Function/class relied on
     *
     * @param {Effect<EffectOptions>}   effect     The effects you want to add to the channelStrip.
     * @param {number}                  [index]    Description of optional variable.
     */
    ChannelStrip.prototype.addEffects = function (effects, index) {
        var _a;
        if (index) {
            (_a = this._effects).splice.apply(_a, __spreadArrays([index, 0], effects));
        }
        else {
            this._effects = __spreadArrays(this._effects, effects);
        }
        this.rootEffects();
    };
    /**
     * Root every channel effects one into anover, by order of appearance in the channelStrip effects array.
     *
     * @see  Function
     */
    ChannelStrip.prototype.rootEffects = function () {
        this._input.disconnect();
        this._effects.forEach(function (ef) {
            ef.output.disconnect();
        });
        this._input.connect(this._effects[0].input);
        if (this._effects.length > 1) {
            for (var i = 0; i < this._effects.length - 1; i++) {
                this._effects[i].output.connect(this._effects[i + 1].input);
            }
        }
        this._effects[this._effects.length - 1].output.connect(this._output);
        // const channelFlow = this._effects.reduce((prev_node, ef) => prev_node.connect(ef._input), this._input)
        // channelFlow.connect(this.gain)
    };
    return ChannelStrip;
}(types_1.Channel));
exports.ChannelStrip = ChannelStrip;
//# sourceMappingURL=ChannelStrip.class.js.map