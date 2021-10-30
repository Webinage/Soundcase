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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { Channel } from '../../types/abstractClasses';
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
        if (fx) {
            if (Array.isArray(fx)) {
                _this.addEffects(fx);
            }
            else {
                _this.addEffect(fx);
            }
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
        this._rootEffects();
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
        }
        else {
            this._effects = this.effects.filter(function (ef) { return ef !== effect; });
        }
        // if ('options' in effect) {
        // }
        this._rootEffects();
    };
    /**
     * Mute one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to mute from the channelStrip.
     */
    ChannelStrip.prototype.muteEffect = function (effect) {
        if (typeof effect === 'number') {
            if ('output' in this._effects[effect]) {
                this._effects[effect].muted = true;
            }
        }
        else if ('output' in effect) {
            if ('output' in this.effects.find(function (ef) { return ef !== effect; })) {
                this.effects.find(function (ef) { return ef !== effect; }).muted = true;
            }
        }
        this._rootEffects();
    };
    /**
     * Unmute one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to unmute from the channelStrip.
     */
    ChannelStrip.prototype.unmuteEffect = function (effect) {
        if (typeof effect === 'number') {
            if ('output' in this._effects[effect]) {
                this._effects[effect].muted = false;
            }
        }
        else if ('output' in effect) {
            this.effects.find(function (ef) { return ef !== effect; }).muted = false;
        }
        this._rootEffects();
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
            (_a = this._effects).splice.apply(_a, __spreadArray([index, 0], effects));
        }
        else {
            this._effects = __spreadArray(__spreadArray([], this._effects), effects);
        }
        this._rootEffects();
    };
    /**
     * Root every channel effects one into anover, by order of appearance in the channelStrip effects array.
     *
     * @see  Function
     */
    ChannelStrip.prototype._rootEffects = function () {
        this._input.disconnect();
        this._effects.forEach(function (ef) {
            ef.disconnect();
        });
        // this._input.connect(this._effects[0].input);
        if ('input' in this._effects[0]) {
            this._input.connect(this._effects[0].input);
        }
        else {
            this._input.connect(this._effects[0]);
        }
        if (this._effects.length > 1) {
            for (var i = 0; i < this._effects.length - 1; i++) {
                if ('input' in this._effects[i + 1]) {
                    this._effects[i].connect(this._effects[i + 1].input);
                }
                else {
                    this._effects[i].connect(this._effects[i + 1]);
                }
            }
        }
        this._effects[this._effects.length - 1].connect(this._output);
        // const channelFlow = this._effects.reduce((prev_node, ef) => prev_node.connect(ef._input), this._input)
        // channelFlow.connect(this.gain)
    };
    return ChannelStrip;
}(Channel));
export { ChannelStrip };
//# sourceMappingURL=ChannelStrip.class.js.map