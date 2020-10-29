import { Effect, MyDelayOptions } from '../../types';
import { keepNumberBetwwen } from '../../utils';
import { MixChannel } from '../channels';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Delay
 *  @extends Effect
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export class Delay extends Effect<MyDelayOptions> {
  private _dryChannel: MixChannel;
  private _wetChannel: MixChannel;

  private _delayNode: DelayNode;

  private _feedbackNode: GainNode;
  private _dryWetRatio: number;

  /**
   * Create a Delay.
   * @param {AudioContext} _context  The audio context the effect will run in.
   * @param {MyDelayOptions} options  The options the effect will be created with.
   */
  constructor(
    _context: AudioContext,
    options: MyDelayOptions = {},
    dryWetRatio: number = 0.5
  ) {
    super('Delay', _context, options);

    this._dryChannel = new MixChannel(this._context);
    this._wetChannel = new MixChannel(this._context);

    this._delayNode = new DelayNode(this._context, this.options);

    this._feedbackNode = new GainNode(this._context);
    this.setFeedback(this.options.feedback);
    this.setDryWetRatio(dryWetRatio);

    // Dry
    this._input
      .connect(this._dryChannel.input)
      .connect(this._dryChannel.output)
      .connect(this._output);

    // Wet
    this._input
      .connect(this._delayNode)
      .connect(this._wetChannel.input)
      .connect(this._wetChannel.output);

    // Feedback
    this._delayNode.connect(this._feedbackNode).connect(this._delayNode);

    this._output.connect(this._context.destination);
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
    this._input.connect(this._dryChannel.input);
    this._input.connect(this._delayNode);
  }

  /**
   * Set the effect dry/wet ratio
   *
   * @see  Function
   *
   * @param {number}   ratio    Dry/wet ratio. 1 is for 100%
   */
  setDryWetRatio(ratio: number) {
    this._dryWetRatio = keepNumberBetwwen(ratio, 0, 1);
    this._dryChannel.output.gain.value = 1 - this._dryWetRatio;
    this._wetChannel.output.gain.value = this._dryWetRatio;
  }

  /**
   * Set the delay time.
   *
   * @see  Function
   *
   * @param {number}    delayTime   Delay time in seconds.
   */
  setDelayTime(delayTime: number) {
    this.options.delayTime = delayTime;
    this._delayNode.delayTime.value = delayTime;
  }

  /**
   * Set the delay feedback gain.
   *
   * @see  Function
   *
   * @param {number}   value    Feedback gain. 1 is 100%.
   */
  setFeedback(value: number) {
    this._feedbackNode.gain.value = keepNumberBetwwen(value, 0, 1);
  }
}
