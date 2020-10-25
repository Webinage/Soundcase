import { Effect, _3BandEQOptions } from '../../types';
import { MixChannel } from '../channels';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class _3BandEQ
 *  @extends Effect
 *  @constructor
 * @augments parent
 *
 * @return {_3BandEQ} Return a _3BandEQ
 */
export class _3BandEQ extends Effect<_3BandEQOptions> {
  private _lowFilterNode: BiquadFilterNode;
  private _lowFilterChannel: MixChannel;
  private _midFilterNode: BiquadFilterNode;
  private _midFilterChannel: MixChannel;
  private _highFilterNode: BiquadFilterNode;
  private _highFilterChannel: MixChannel;

  /**
   * Create a _3BandEQ.
   * @param {AudioContext} _context  The audio context the effect will run in.
   * @param {_3BandEQOptions} options  The options the effect will be created with.
   */
  constructor(_context: AudioContext, options: _3BandEQOptions = {}) {
    super('_3BandEQ', _context, options);
    // this._effectContext = new EffectContext()
    this._lowFilterChannel = new MixChannel(this._context);
    this._midFilterChannel = new MixChannel(this._context);
    this._highFilterChannel = new MixChannel(this._context);
    this._lowFilterNode = new BiquadFilterNode(this._context, {
      // Q: options.Q,
      detune: options.detune,
      frequency: this.options.breakPoints.lowMid,
      type: 'lowpass'
    });
    this._midFilterNode = new BiquadFilterNode(this._context, {
      // Q: options.Q,
      detune: options.detune,
      frequency:
        (this.options.breakPoints.lowMid + this.options.breakPoints.midHigh) /
        2,
      type: 'bandpass'
    });
    this._highFilterNode = new BiquadFilterNode(this._context, {
      // Q: options.Q,
      detune: options.detune,
      frequency: this.options.breakPoints.midHigh,
      type: 'highpass'
    });

    this._input
      .connect(this._lowFilterNode)
      .connect(this._lowFilterChannel.input)
      .connect(this._lowFilterChannel.output)
      .connect(this._output);
    this._input
      .connect(this._midFilterNode)
      .connect(this._midFilterChannel.input)
      .connect(this._midFilterChannel.output)
      .connect(this._output);
    this._input
      .connect(this._highFilterNode)
      .connect(this._highFilterChannel.input)
      .connect(this._highFilterChannel.output)
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
  setLowGain(value: number) {
    this._lowFilterChannel.output.gain.value = value;
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
  setLowFrequency(value: number) {
    this._lowFilterNode.frequency.value = value;
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
  setLowQ(value: number) {
    this._lowFilterNode.Q.value = value;
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
  setMidGain(value: number) {
    this._midFilterChannel.output.gain.value = value;
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
  setMidFrequency(value: number) {
    this._midFilterNode.frequency.value = value;
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
  setMidQ(value: number) {
    this._midFilterNode.Q.value = value;
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
  setHighGain(value: number) {
    this._highFilterChannel.output.gain.value = value;
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
  setHighFrequency(value: number) {
    this._highFilterNode.frequency.value = value;
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
  setHighQ(value: number) {
    this._highFilterNode.Q.value = value;
  }
}
