import { Channel } from '../../types';

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
}
