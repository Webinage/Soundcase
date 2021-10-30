import { Channel, Effect } from '../../types/abstractClasses';
import { EffectOptions } from '../../types/interfaces';
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
    constructor(_context: AudioContext);
    constructor(_context: AudioContext, effect: Effect<EffectOptions> | AudioNode);
    constructor(_context: AudioContext, effects: (Effect<EffectOptions> | AudioNode)[]);
    /**
     * Get channelStrip effects.
     *
     * @return {type} Return an array of Effect.
     */
    get effects(): (AudioNode | Effect<EffectOptions>)[];
    /**
     * Add one effect in the channelStrip
     *
     * @see  Function/class relied on
     *
     * @param {Effect<EffectOptions>}   effect     The effect you want to add to the channelStrip.
     * @param {number}                  [index]    Description of optional variable.
     */
    addEffect(effect: Effect<EffectOptions> | AudioNode, index?: number): void;
    /**
     * Remove one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to remove from the channelStrip.
     */
    removeEffect(effect: Effect<EffectOptions> | number): void;
    /**
     * Mute one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to mute from the channelStrip.
     */
    muteEffect(effect: Effect<EffectOptions> | AudioNode | number): void;
    /**
     * Unmute one effect from the channelStrip
     *
     * @see  Function
     *
     * @param {Effect<EffectOptions> | number}   effect   The effect you want to unmute from the channelStrip.
     */
    unmuteEffect(effect: Effect<EffectOptions> | AudioNode | number): void;
    /**
     * Add multiple effects in the channelStrip
     *
     * @see  Function/class relied on
     *
     * @param {Effect<EffectOptions>}   effect     The effects you want to add to the channelStrip.
     * @param {number}                  [index]    Description of optional variable.
     */
    addEffects(effects: (Effect<EffectOptions> | AudioNode)[], index?: number): void;
    /**
     * Root every channel effects one into anover, by order of appearance in the channelStrip effects array.
     *
     * @see  Function
     */
    private _rootEffects;
}
