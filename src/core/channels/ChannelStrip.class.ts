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
export class ChannelStrip extends Channel {
  private _effects: Effect<EffectOptions>[] = [];

  /**
   * Create a ChannelStrip.
   * @param {AudioContext}                                        _context    The audio context you run the channelStrip in.
   * @param {Effect<EffectOptions> | Effect<EffectOptions>[]}     effects     The effect/effects you want to start the channel strip with.
   */
  constructor(_context: AudioContext, effect: Effect<EffectOptions>);
  constructor(_context: AudioContext, effects: Effect<EffectOptions>[]);
  constructor(
    _context: AudioContext,
    fx: Effect<EffectOptions> | Effect<EffectOptions>[]
  ) {
    super(_context);
    if (Array.isArray(fx)) {
      this.addEffects(fx);
    } else {
      this.addEffect(fx);
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
  addEffect(effect: Effect<EffectOptions>, index?: number) {
    if (index) {
      this._effects.splice(index, 0, effect);
    } else {
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
  removeEffect(effect: Effect<EffectOptions> | number): void {
    if (typeof effect === 'number') {
      this._effects.splice(effect, 1);
    } else {
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
  muteEffect(effect: Effect<EffectOptions> | number): void {
    if (typeof effect === 'number') {
      this._effects[effect].muted = true;
    } else {
      this.effects.find(ef => ef !== effect).muted = true;
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
  unmuteEffect(effect: Effect<EffectOptions> | number): void {
    if (typeof effect === 'number') {
      this._effects[effect].muted = false;
    } else {
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
  addEffects(effects: Effect<EffectOptions>[], index?: number) {
    if (index) {
      this._effects.splice(index, 0, ...effects);
    } else {
      this._effects = [...this._effects, ...effects];
    }
    this._rootEffects();
  }

  /**
   * Root every channel effects one into anover, by order of appearance in the channelStrip effects array.
   *
   * @see  Function
   */
  private _rootEffects() {
    this._input.disconnect();
    this._effects.forEach(ef => {
      ef.output.disconnect();
    });
    this._input.connect(this._effects[0].input);
    if (this._effects.length > 1) {
      for (let i = 0; i < this._effects.length - 1; i++) {
        this._effects[i].output.connect(this._effects[i + 1].input);
      }
    }

    this._effects[this._effects.length - 1].output.connect(this._output);

    // const channelFlow = this._effects.reduce((prev_node, ef) => prev_node.connect(ef._input), this._input)
    // channelFlow.connect(this.gain)
  }
}
