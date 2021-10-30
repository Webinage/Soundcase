import { Effect } from '../../types/abstractClasses';
import { _3BandEQOptions } from '../../types/interfaces';
import { clamp } from '../../utils';
import { ChannelStrip } from '../channels';

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
  private readonly _lowFilterNode: BiquadFilterNode;
  // private _lowFilterChannel: MixChannel;
  private readonly _midFilterChannel: ChannelStrip;
  private readonly _midLowFilterNode: BiquadFilterNode;
  private readonly _midHighFilterNode: BiquadFilterNode;
  // private _midFilterChannel: MixChannel;
  private readonly _highFilterNode: BiquadFilterNode;
  // private _highFilterChannel: MixChannel;

  /**
   * Create a _3BandEQ.
   * @param {AudioContext} _context  The audio context the effect will run in.
   * @param {_3BandEQOptions} options  The options the effect will be created with.
   */
  constructor(_context: AudioContext, options: _3BandEQOptions = {}) {
    super('_3BandEQ', _context, options);
    // this._effectContext = new EffectContext()
    // this._lowFilterChannel = new MixChannel(this._context);
    // this._midFilterChannel = new MixChannel(this._context);
    // this._highFilterChannel = new MixChannel(this._context);
    this._lowFilterNode = new BiquadFilterNode(this._context, {
      // Q: options.Q,
      detune: this.options.low.detune,
      frequency: this.options.breakPoints.lowMid,
      type: 'lowpass'
    });
    this._midLowFilterNode = new BiquadFilterNode(this._context, {
      // Q: options.Q,
      detune: this.options.low.detune,
      frequency: this.options.breakPoints.lowMid,
      type: 'highpass'
    });
    this._midHighFilterNode = new BiquadFilterNode(this._context, {
      // Q: options.Q,
      detune: this.options.low.detune,
      frequency: this.options.breakPoints.midHigh,
      type: 'lowpass'
    });
    this._midFilterChannel = new ChannelStrip(this._context, [
      this._midLowFilterNode,
      this._midHighFilterNode
    ]);
    this._highFilterNode = new BiquadFilterNode(this._context, {
      // Q: options.Q,
      detune: this.options.low.detune,
      frequency: this.options.breakPoints.midHigh,
      type: 'highpass'
    });
    this._rootWetChannel();
  }

  /**
   *
   * @see function
   * @param {number}  value Value of the ....
   */
  private _rootWetChannel() {
    this._wetChannel.input
      .connect(this._lowFilterNode)
      .connect(this._wetChannel.output);
    this._wetChannel.input.connect(this._midFilterChannel.input);
    this._midFilterChannel.output.connect(this._wetChannel.output);
    this._wetChannel.input
      .connect(this._highFilterNode)
      .connect(this._wetChannel.output);
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   * @see  Function
   *
   * @param {number}   value    Value of the frequency breakpoitn.
   */
  setLowMidFrequencyBreakpoint(value: number) {
    this._updateOptions({
      breakPoints: { ...this.options.breakPoints, lowMid: value }
    });
    this.options.breakPoints.lowMid = clamp(
      value,
      0,
      this.options.breakPoints.midHigh
    );
    this._lowFilterNode.frequency.value = this.options.breakPoints.lowMid;
    this._midLowFilterNode.frequency.value =
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
    this._updateOptions({
      breakPoints: { ...this.options.breakPoints, midHigh: value }
    });
    this.options.breakPoints.lowMid = clamp(
      value,
      this.options.breakPoints.midHigh,
      20000
    );
    this._midHighFilterNode.frequency.value =
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
    this._updateOptions({ low: { ...this.options.low, gain: value } });
    // this._lowFilterChannel.output.gain.value = value;
    this._lowFilterNode.gain.value = value;
  }

  // /**
  //  * Set the Q for the low frequency band.
  //  *
  //  * @see  Function
  //  *
  //  * @param {number}   value    Q value.
  //  */
  // setLowQ(value: number) {
  //   this._lowFilterNode.Q.value = value;
  // }

  // /**
  //  * Set the Q for the low frequency band.
  //  *
  //  * @see  Function
  //  *
  //  * @param {number}   value    Q value.
  //  */
  // setLowQ(value: number) {
  //   this._lowFilterNode.Q.value = value;
  // }

  /**
   * Set the gain for the mid frequency band
   *
   * @see  Function
   *
   * @param {number}   value    Gain value. 1 is for 100%
   */
  setMidGain(value: number) {
    this._updateOptions({ mid: { ...this.options.mid, gain: value } });
    this._midFilterChannel.setGain(value);
  }

  // /**
  //  * Set the Q for the mid frequency band.
  //  *
  //  * @see  Function
  //  *
  //  * @param {number}   value    Q value.
  //  */
  // setMidQ(value: number) {
  //   this._midFilterNode.Q.value = value;
  // }

  // /**
  //  * Set the Q for the mid frequency band.
  //  *
  //  * @see  Function
  //  *
  //  * @param {number}   value    Q value.
  //  */
  // setMidQ(value: number) {
  //   this._midFilterNode.Q.value = value;
  // }

  /**
   * Set the gain for the high frequency band
   *
   * @see  Function
   *
   * @param {number}   value    Gain value. 1 is for 100%
   */
  setHighGain(value: number) {
    this._updateOptions({ high: { ...this.options.high, gain: value } });
    this._highFilterNode.gain.value = value;
  }

  // /**
  //  * Set the Q for the high frequency band.
  //  *
  //  * @see  Function
  //  *
  //  * @param {number}   value    Q value.
  //  */
  // setHighQ(value: number) {
  //   this._highFilterNode.Q.value = value;
  // }

  // /**
  //  * Set the Q for the high frequency band.
  //  *
  //  * @see  Function
  //  *
  //  * @param {number}   value    Q value.
  //  */
  // setHighQ(value: number) {
  //   this._highFilterNode.Q.value = value;
  // }

  // /**
  //  * Set the Q for the high frequency band.
  //  *
  //  * @see  Function
  //  *
  //  * @param {number}   value    Q value.
  //  */
  // setQ(value: number) {
  //   this._lowFilterNode.Q.value = value;
  //   this._midFilterNode.Q.value = value;
  //   this._highFilterNode.Q.value = value;
  // }
}
