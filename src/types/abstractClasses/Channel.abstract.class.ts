import { EffectOptions } from '../interfaces';
import { Effect } from './Effect.abstract.class';

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
export abstract class Channel {
  protected readonly _input: GainNode;
  protected readonly _output: GainNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(protected _context: AudioContext) {
    this._input = new GainNode(this._context);
    this._output = new GainNode(this._context);
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

  /**
   * Summary. (use period)
   *
   * Can connect to multiple nodes/channels
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
    // this._output.disconnect()
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
  setGain(value: number): void {
    this._output.gain.value = value;
  }
}
