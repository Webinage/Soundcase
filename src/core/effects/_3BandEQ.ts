import { Effect, _3BandEQOptions } from '../../types';
import { keepNumberBetwwen } from '../../utils';
import { MixChannel } from '../channels';

/**
 * A 3 band equalizer
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
      detune: this.options.detune,
      frequency: this.options.breakPoints.lowMid,
      type: 'lowpass'
    });
    this._midFilterNode = new BiquadFilterNode(this._context, {
      // Q: options.Q,
      detune: this.options.detune,
      frequency:
        (this.options.breakPoints.lowMid + this.options.breakPoints.midHigh) /
        2,
      type: 'bandpass'
    });
    this._highFilterNode = new BiquadFilterNode(this._context, {
      // Q: options.Q,
      detune: this.options.detune,
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
   * Set the low/mid frequency breakpoint
   *
   * @see  Function
   *
   * @param {number}   value    Value of the frequency breakpoitn.
   */
  _rootEffect() {
    this._input.disconnect();
    this._input.connect(this._lowFilterNode);
    this._input.connect(this._midFilterNode);
    this._input.connect(this._highFilterNode);
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   * @see  Function
   *
   * @param {number}   value    Value of the frequency breakpoitn.
   */
  setLowMidFrequencyBreakpoint(value: number) {
    this.options.breakPoints.lowMid = keepNumberBetwwen(
      value,
      0,
      this.options.breakPoints.midHigh
    );
    this._lowFilterNode.frequency.value = this.options.breakPoints.lowMid;
    this._midFilterNode.frequency.value =
      (this.options.breakPoints.lowMid + this.options.breakPoints.midHigh) / 2;
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   * @see  Function
   *
   * @param {number}   value    Value of the frequency breakpoitn.
   */
  setMidHighFrequencyBreakpoint(value: number) {
    this.options.breakPoints.lowMid = keepNumberBetwwen(
      value,
      this.options.breakPoints.midHigh,
      20000
    );
    this._midFilterNode.frequency.value =
      (this.options.breakPoints.lowMid + this.options.breakPoints.midHigh) / 2;
    this._highFilterNode.frequency.value = this.options.breakPoints.midHigh;
  }

  /**
   * Set the gain for the low frequency band
   *
   * @see  Function
   *
   * @param {number}   value    Gain value. 1 is for 100%
   */
  setLowGain(value: number) {
    this._lowFilterChannel.output.gain.value = value;
  }

  /**
   * Set the Q for the low frequency band.
   *
   * @see  Function
   *
   * @param {number}   value    Q value.
   */
  setLowQ(value: number) {
    this._lowFilterNode.Q.value = value;
  }

  /**
   * Set the gain for the mid frequency band
   *
   * @see  Function
   *
   * @param {number}   value    Gain value. 1 is for 100%
   */
  setMidGain(value: number) {
    this._midFilterChannel.output.gain.value = value;
  }

  /**
   * Set the Q for the mid frequency band.
   *
   * @see  Function
   *
   * @param {number}   value    Q value.
   */
  setMidQ(value: number) {
    this._midFilterNode.Q.value = value;
  }

  /**
   * Set the gain for the high frequency band
   *
   * @see  Function
   *
   * @param {number}   value    Gain value. 1 is for 100%
   */
  setHighGain(value: number) {
    this._highFilterChannel.output.gain.value = value;
  }

  /**
   * Set the Q for the high frequency band.
   *
   * @see  Function
   *
   * @param {number}   value    Q value.
   */
  setHighQ(value: number) {
    this._highFilterNode.Q.value = value;
  }
}
