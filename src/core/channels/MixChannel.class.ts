import { Channel } from '../../types/abstractClasses';

/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 *  @class MixChannel
 *  @extends Channel
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export class MixChannel extends Channel {
  /**
   * Create a MixChannel.
   * @param {AudioContext}    _context    The audio context you run the channel strip in.
   */
  constructor(_context: AudioContext) {
    super(_context);
    this._input.connect(this._output);
  }
}
