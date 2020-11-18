import { Effect } from '../../types/abstractClasses';
import { ReverbOptions } from '../../types/interfaces';
import { buildImpulse } from '../../utils';

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
  private readonly _reverbNode: ConvolverNode;

  /**
   * Create a point.
   * @param {AudioContext} context
   * @param {ReverbOptions} opts
   * @param {number} opts.seconds
   * @param {number} opts.decay
   * @param {boolean} opts.reverse
   */
  constructor(_context: AudioContext, options: ReverbOptions = {}) {
    super('Reverb', _context, options);
    this._reverbNode = new ConvolverNode(this._context, {
      buffer: buildImpulse(this.options)
    });
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   * @see  Function
   *
   * @param {number}   value    Value of the frequency breakpoitn.
   */
  _rootWetChannel() {
    this._wetChannel.input
      .connect(this._reverbNode)
      .connect(this._wetChannel.output);
  }

  // /**
  //  * Set the low/mid frequency breakpoint
  //  *
  //  */
  // get seconds(): AudioParam {
  //   return this._reverbNode;
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
  setSeconds(seconds: number) {
    this._updateOptions({ seconds });
    this._reverbNode.buffer = buildImpulse(this.options);
  }

  //   /**
  //   * Set the low/mid frequency breakpoint
  //   *
  //   */
  //  get decay() {
  //    return this._reverbNode;
  //  }

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
    this._updateOptions({ decay });
    this._reverbNode.buffer = buildImpulse(this.options);
  }

  //   /**
  //  * Set the low/mid frequency breakpoint
  //  *
  //  */
  // get reverse() {
  //   return this._reverbNode;
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
  setReverse(reverse: boolean) {
    this._updateOptions({ reverse });
    this._reverbNode.buffer = buildImpulse(this.options);
  }
}
