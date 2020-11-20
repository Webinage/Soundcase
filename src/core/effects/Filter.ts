import { Effect } from '../../types/abstractClasses';
import { FilterOptions } from '../../types/interfaces';

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
export class Filter extends Effect<FilterOptions> {
  private readonly _filterNode: BiquadFilterNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(_context: AudioContext, options: FilterOptions = {}) {
    super('Filter', _context, options);

    this._filterNode = new BiquadFilterNode(this._context, this.options);
    this._rootWetChannel();
  }

  /**
   *
   * @see function
   * @param {number}  value Value of the ....
   */
  private _rootWetChannel() {
    this._wetChannel.input
      .connect(this._filterNode)
      .connect(this._wetChannel.output);
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   */
  get frequency() {
    return this._filterNode.frequency;
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
  setFrequency(value: number) {
    this._updateOptions({ frequency: value });
    this._filterNode.frequency.value = value;
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   */
  get Q() {
    return this._filterNode.Q;
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
  setQ(value: number) {
    this._updateOptions({ Q: value });
    this._filterNode.Q.value = this.options.Q;
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   */
  get gain() {
    return this._filterNode.gain;
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
  setGain(value: number) {
    this._updateOptions({ gain: value });
    this._filterNode.gain.value = this.options.gain;
  }

  /**
   * Set the low/mid frequency breakpoint
   *
   */
  get detune() {
    return this._filterNode.detune;
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
  setDetune(value: number) {
    this._updateOptions({ detune: value });
    this._filterNode.detune.value = this.options.detune;
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
  setFilterType(value: BiquadFilterType) {
    this._updateOptions({ type: value });
    this._filterNode.type = this.options.type;
  }
}
