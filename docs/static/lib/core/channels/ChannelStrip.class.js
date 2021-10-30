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
export class ChannelStrip extends Channel {
    constructor(_context, fx) {
        super(_context);
        this._effects = [];
        if (fx) {
            if (Array.isArray(fx)) {
                this.addEffects(fx);
            }
            else {
                this.addEffect(fx);
            }
        }
    }
    /**
     * Get channelStrip effects.
     *
     * @return {type} Return an array of Effect.
     */
    get effects() {
        return this._effects;
    }
    /**
     * Add one effect in the channelStrip
     *
     * @see  Function/class relied on
     *
     * @param {Effect<EffectOptions>}   effect     The effect you want to add to the channelStrip.
     * @param {number}                  [index]    Description of optional variable.
     */
    addEffect(effect, index) {
        if (index) {
            this._effects.splice(index, 0, effect);
        }
        else {
            this._effects.push(effect);
        }
        this._rootEffects();
    }
    /**
     * Remove one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to remove from the channelStrip.
     */
    removeEffect(effect) {
        if (typeof effect === 'number') {
            this._effects.splice(effect, 1);
        }
        else {
            this._effects = this.effects.filter(ef => ef !== effect);
        }
        // if ('options' in effect) {
        // }
        this._rootEffects();
    }
    /**
     * Mute one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to mute from the channelStrip.
     */
    muteEffect(effect) {
        if (typeof effect === 'number') {
            if ('output' in this._effects[effect]) {
                this._effects[effect].muted = true;
            }
        }
        else if ('output' in effect) {
            if ('output' in this.effects.find(ef => ef !== effect)) {
                this.effects.find(ef => ef !== effect).muted = true;
            }
        }
        this._rootEffects();
    }
    /**
     * Unmute one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to unmute from the channelStrip.
     */
    unmuteEffect(effect) {
        if (typeof effect === 'number') {
            if ('output' in this._effects[effect]) {
                this._effects[effect].muted = false;
            }
        }
        else if ('output' in effect) {
            this.effects.find(ef => ef !== effect).muted = false;
        }
        this._rootEffects();
    }
    /**
     * Add multiple effects in the channelStrip
     *
     * @see  Function/class relied on
     *
     * @param {Effect<EffectOptions>}   effect     The effects you want to add to the channelStrip.
     * @param {number}                  [index]    Description of optional variable.
     */
    addEffects(effects, index) {
        if (index) {
            this._effects.splice(index, 0, ...effects);
        }
        else {
            this._effects = [...this._effects, ...effects];
        }
        this._rootEffects();
    }
    /**
     * Root every channel effects one into anover, by order of appearance in the channelStrip effects array.
     *
     * @see  Function
     */
    _rootEffects() {
        this._input.disconnect();
        this._effects.forEach(ef => {
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
            for (let i = 0; i < this._effects.length - 1; i++) {
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
    }
}
//# sourceMappingURL=ChannelStrip.class.js.map