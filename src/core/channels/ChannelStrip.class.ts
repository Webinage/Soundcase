import { Channel, Effect, EffectOptions } from '../../types';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 * @class
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export class ChannelStrip extends Channel {
  private _effects: Effect<EffectOptions>[] = [];

  constructor(_context: AudioContext, effect: Effect<EffectOptions>);
  constructor(_context: AudioContext, effects: Effect<EffectOptions>[]);
  constructor(_context: AudioContext, fx: any) {
    super(_context);
    if (Array.isArray(fx)) {
      this.addEffects(fx);
    } else {
      this.addEffect(fx);
    }
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
  addEffect(effect: Effect<EffectOptions>) {
    this._effects.push(effect);
    this.rootEffects();
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
  addEffects(effects: Effect<EffectOptions>[]) {
    this._effects = [...this._effects, ...effects];
    this.rootEffects();
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
  rootEffects() {
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
