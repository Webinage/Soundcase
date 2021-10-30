import { Instrument } from './Instrument.abstract.class';

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
export abstract class MidiInstrument extends Instrument {
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  // constructor(protected _context: AudioContext) {
  constructor() {
    super();
  }
}
