import { Channel } from './Channel.abstract.class';

/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @class
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export class MixChannel extends Channel {
  constructor(_context: AudioContext) {
    super(_context);
    this._input.connect(this._output);
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
  connect(channel: Channel): AudioNode {
    // this._output.disconnect()
    this._output.connect(channel.input);
    return channel.output;
  }
}
