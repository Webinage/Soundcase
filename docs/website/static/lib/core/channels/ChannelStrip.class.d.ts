import { Channel, Effect, EffectOptions } from '../../types';
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
export declare class ChannelStrip extends Channel {
    private _effects;
    /**
     * Create a ChannelStrip.
     * @param {AudioContext}                                        _context    The audio context you run the channelStrip in.
     * @param {Effect<EffectOptions> | Effect<EffectOptions>[]}     effects     The effect/effects you want to start the channel strip with.
     */
    constructor(_context: AudioContext, effect: Effect<EffectOptions>);
    constructor(_context: AudioContext, effects: Effect<EffectOptions>[]);
    /**
     * Get channelStrip effects.
     *
     * @return {type} Return an array of Effect.
     */
    get effects(): Effect<EffectOptions>[];
    /**
     * Add one effect in the channelStrip
     *
     * @see  Function/class relied on
     *
     * @param {Effect<EffectOptions>}   effect     The effect you want to add to the channelStrip.
     * @param {number}                  [index]    Description of optional variable.
     */
    addEffect(effect: Effect<EffectOptions>, index?: number): void;
    /**
     * Remove one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to remove from the channelStrip.
     */
    removeEffect(effect: Effect<EffectOptions> | number): void;
    /**
     * Add multiple effects in the channelStrip
     *
     * @see  Function/class relied on
     *
     * @param {Effect<EffectOptions>}   effect     The effects you want to add to the channelStrip.
     * @param {number}                  [index]    Description of optional variable.
     */
    addEffects(effects: Effect<EffectOptions>[], index?: number): void;
    /**
     * Root every channel effects one into anover, by order of appearance in the channelStrip effects array.
     *
     * @see  Function
     */
    rootEffects(): void;
}
