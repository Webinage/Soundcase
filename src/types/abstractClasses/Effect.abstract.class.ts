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
  protected _muted: boolean = false;
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
      this.options = { ...{ delayTime: 0.5, feedback: 0.5 }, ...options };
    } else if (name === 'Distortion') {
      this.options = {
        ...{ curve: makeDistortionCurve(100), oversample: '2x' },
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
   * Get the muted effect status.
   *
   * @see  Function
   *
   * @return {type} Return the muted effect status.
   */
  get muted(): boolean {
    return this._muted;
  }

  /**
   * Get the muted effect status.
   *
   * @see  Function
   *
   * @return {type} Return the muted effect status.
   */
  set muted(value: boolean) {
    this._muted = value;
    // TO DO : Router l'input dans l'output si false et inversement
    if (value === true) {
      this._input.disconnect();
      this._input.connect(this._output);
    } else {
      this._rootEffect();
    }
  }

  /**
   * Get the efect input.
   *
   * @see  Function
   *
   * @return {type} Return the effect input.
   */
  get input() {
    return this._input;
  }

  /**
   * Get the effect output.
   *
   * @see  Function
   *
   * @return {type} Return the effect output.
   */
  get output() {
    return this._output;
  }

  /**
   * Get the effect output.
   *
   * @see  Function
   *
   * @return {type} Return the effect output.
   */
  abstract _rootEffect(): void;

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
