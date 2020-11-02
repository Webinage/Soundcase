import { Effect, PanOptions } from '../../types';
import { keepNumberBetwwen } from '../../utils';

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
export class Pan extends Effect<PanOptions> {
  private _pannerNode: StereoPannerNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(_context: AudioContext, options: PanOptions = {}) {
    super('Pan', _context, options);

    this._pannerNode = new StereoPannerNode(this._context, this.options);

    this._input.connect(this._pannerNode).connect(this._output);
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
    this._input.connect(this._pannerNode);
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
    this._pannerNode.pan.value = keepNumberBetwwen(value, -1, 1);
  }
}
