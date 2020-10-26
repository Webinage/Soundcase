import { Effect, ReverbOptions } from '../../types';
import { keepNumberBetwwen } from '../../utils';
import { MixChannel } from '../channels';

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
export class Reverb extends Effect<ReverbOptions> {
  private _dryChannel: MixChannel;
  private _effectChannel: MixChannel;
  private _node: ConvolverNode;

  private _dryWetRatio: number;

  /**
   * Create a point.
   * @param {AudioContext} context
   * @param {ReverbOptions} opts
   * @param {number} opts.seconds
   * @param {number} opts.decay
   * @param {boolean} opts.reverse
   */
  constructor(
    _context: AudioContext,
    options: ReverbOptions = {},
    dryWetRatio: number = 0.5
  ) {
    super('Reverb', _context, options);
    this._dryChannel = new MixChannel(this._context);
    this._effectChannel = new MixChannel(this._context);
    this.setDryWetRatio(dryWetRatio);
    this._node = new ConvolverNode(this._context, {
      buffer: this._buildImpulse(this.options)
    });

    this._input
      .connect(this._dryChannel.input)
      .connect(this._dryChannel.output)
      .connect(this._output);

    this._input
      .connect(this._effectChannel.input)
      .connect(this._node)
      .connect(this._effectChannel.output)
      .connect(this._output);
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
  get input() {
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
  get output() {
    return this._output;
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
  setSeconds(seconds: number) {
    this.options.seconds = seconds;
    this._node.buffer = this._buildImpulse(this.options);
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
  setDecay(decay: number) {
    this.options.decay = decay;
    this._node.buffer = this._buildImpulse(this.options);
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
  setReverse(reverse: boolean) {
    this.options.reverse = reverse;
    this._node.buffer = this._buildImpulse(this.options);
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
  setDryWetRatio(ratio: number) {
    this._dryWetRatio = keepNumberBetwwen(ratio, 0, 1);
    this._dryChannel.output.gain.value = 1 - this._dryWetRatio;
    this._effectChannel.output.gain.value = this._dryWetRatio;
  }

  /**
   * Utility function for building an impulse response from the options parameters.
   *
   * Based on https://github.com/web-audio-components/simple-reverb _buildImpulse for reverb method
   *
   * @param {ReverbOptions}   options   The reverb options that will be used to generate the impulse.
   *
   * @return {AudioBuffer}    Rutrn an audio buffer.
   */
  private _buildImpulse(options: ReverbOptions): AudioBuffer {
    const rate = this._context.sampleRate,
      length = rate * options.seconds,
      decay = options.decay,
      impulse = this._context.createBuffer(2, length, rate),
      impulseL = impulse.getChannelData(0),
      impulseR = impulse.getChannelData(1);

    let n, i;
    for (i = 0; i < length; i++) {
      n = options.reverse ? length - i : i;
      impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
      impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    }

    return impulse;
  }
}
