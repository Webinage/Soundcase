import { Effect, MyDelayOptions } from '../../types';
import { keepNumberBetwwen } from '../../utils';
import { MixChannel } from '../channels';

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
export class Delay extends Effect<MyDelayOptions> {
  private _dryChannel: MixChannel;
  private _effectChannel: MixChannel;
  private _node: DelayNode;

  private _dryWetRatio: number;

  constructor(
    _context: AudioContext,
    options: MyDelayOptions = {},
    dryWetRatio: number = 0.5
  ) {
    super('Delay', _context, options);

    this._dryChannel = new MixChannel(this._context);
    this._effectChannel = new MixChannel(this._context);
    this.setDryWetRatio(dryWetRatio);
    this._node = new DelayNode(this._context, options);

    this._input
      .connect(this._dryChannel.input)
      .connect(this._dryChannel.output)
      .connect(this._output);

    this._input
      .connect(this._effectChannel.input)
      .connect(this._node)
      .connect(this._effectChannel.output)
      .connect(this._output);

    this._output.connect(this._context.destination);
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
  setDryWetRatio(ratio: number) {
    this._dryWetRatio = keepNumberBetwwen(ratio, 0, 1);
    this._dryChannel.output.gain.value = 1 - this._dryWetRatio;
    this._effectChannel.output.gain.value = this._dryWetRatio;
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
  setDelayTime(time: number) {
    this._node.delayTime.value = time;
  }
}
