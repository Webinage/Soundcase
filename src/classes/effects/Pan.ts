import { keepNumberBetwwen } from '../../utils';
import { Effect } from './Effect.abstract.class';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface PanOptions {
  pan?: number;
}
// Check PannerOptions

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 * @class
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export class Pan extends Effect<PanOptions> {
  private _node: StereoPannerNode;

  constructor(_context: AudioContext, options: PanOptions = {}) {
    super('Pan', _context, options);

    this._node = new StereoPannerNode(this._context, options);

    this._input.connect(this._node).connect(this._output);
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
  setPan(value: number) {
    this._node.pan.value = keepNumberBetwwen(value, -1, 1);
  }
}
