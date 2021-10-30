import { Effect } from '../../types/abstractClasses';
import { PanOptions } from '../../types/interfaces';
import { clamp } from '../../utils';

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
  private readonly _pannerNode: StereoPannerNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(_context: AudioContext, options: PanOptions = {}) {
    super('Pan', _context, options);

    this._pannerNode = new StereoPannerNode(this._context, this.options);
    this._rootWetChannel();
  }

  /**
   *
   * @see function
   * @param {number}  value Value of the ....
   */
  private _rootWetChannel() {
    this._wetChannel.input
      .connect(this._pannerNode)
      .connect(this._wetChannel.output);
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   */
  get pan() {
    return this._pannerNode.pan;
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
    this._updateOptions({ pan: clamp(value, -1, 1) });
    this._pannerNode.pan.value = this.options.pan;
  }
}
