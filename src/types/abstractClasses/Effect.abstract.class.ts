import { Channel } from '.';
import { EffectOptions, EffectsNames } from '..';
import { makeDistortionCurve } from '../../utils';

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
export abstract class Effect<OT> {
  protected options: OT;
  protected _output: GainNode;
  protected _input: GainNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(
    protected name: EffectsNames,
    protected _context: AudioContext,
    options: OT
  ) {
    this._input = new GainNode(this._context);
    this._output = new GainNode(this._context);

    if (name === '_3BandEQ') {
      this.options = {
        ...{ breakPoints: { lowMid: 200, midHigh: 2000 }, Q: 1, detune: 0 },
        ...options
      };
    } else if (name === 'Delay') {
      this.options = { ...{ delayTime: 0.5 }, ...options };
    } else if (name === 'Distortion') {
      this.options = {
        ...{ curve: makeDistortionCurve(), oversample: '2x' },
        ...options
      };
    } else if (name === 'Filter') {
      this.options = {
        ...{ type: 'lowpass', frequency: 500, Q: 1, detune: 0, gain: 1 },
        ...options
      };
    } else if (name === 'Pan') {
      this.options = { ...{ pan: 0 }, ...options };
    } else if (name === 'Reverb') {
      this.options = {
        ...{ seconds: 3, decay: 2, reverse: false },
        ...options
      };
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
  get input(): GainNode {
    return this._input;
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
  get output(): GainNode {
    return this._output;
  }

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
  // connect(effect: Effect<EffectOptions>): AudioNode;
  // connect(channel: Channel): AudioNode;
  // connect(node: AudioNode): AudioNode;
  connect(item: AudioNode | Effect<EffectOptions> | Channel): AudioNode {
    if ('input' in item && 'output' in item) {
      this._output.connect(item.input);
      return item.output;
    } else {
      return this._output.connect(item);
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
  setGain(value: number) {
    this._output.gain.value = value;
  }
}
