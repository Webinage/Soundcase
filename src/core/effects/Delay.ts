import { Effect } from '../../types/abstractClasses';
import { MyDelayOptions } from '../../types/interfaces';
import { clamp } from '../../utils';

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
  private readonly _delayNode: DelayNode;

  private readonly _feedbackNode: GainNode;

  /**
   * Create a Delay.
   * @param {AudioContext} _context  The audio context the effect will run in.
   * @param {MyDelayOptions} options  The options the effect will be created with.
   */
  constructor(_context: AudioContext, options: MyDelayOptions = {}) {
    super('Delay', _context, options);

    this._delayNode = new DelayNode(this._context, this.options);

    this._feedbackNode = new GainNode(this._context);
    this.setFeedback(this.options.feedback);

    // Feedback
    this._delayNode.connect(this._feedbackNode).connect(this._delayNode);

    // this._output.connect(this._context.destination);
  }

  /**
   *
   * @see function
   * @param {number}  value Value of the ....
   */
  _rootWetChannel() {
    this._wetChannel.input
      .connect(this._delayNode)
      .connect(this._wetChannel.output);
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   */
  get delayTime() {
    return this._delayNode.delayTime;
  }

  /**
   * Set the delay time.
   *
   * @see  Function
   *
   * @param {number}    delayTime   Delay time in seconds.
   */
  setDelayTime(delayTime: number) {
    this._updateOptions({ delayTime: clamp(delayTime, 0) });
    this._delayNode.delayTime.value = this.options.delayTime;
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   */
  get feedback() {
    return this._feedbackNode.gain;
  }

  /**
   * Set the delay feedback gain.
   *
   * @see  Function
   *
   * @param {number}   value    Feedback gain. 1 is 100%.
   */
  setFeedback(value: number) {
    this._updateOptions({ feedback: clamp(value, 0, 1) });
    this._feedbackNode.gain.value = this.options.feedback;
  }
}
