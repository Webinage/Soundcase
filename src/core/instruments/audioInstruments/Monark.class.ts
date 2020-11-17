import { MonophonicSynth } from '../../../types/abstractClasses';
import { Filter } from '../../effects';
import { Envelope } from '../../envelopes';
import { Oscillator } from '../../oscillators';

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
export class Monark extends MonophonicSynth {
  _oscillator1: Oscillator;
  _oscillator2: Oscillator;
  _oscillator3: Oscillator;

  _filter: Filter;

  _filterEnvelope: Envelope;
  _amplitudeEnvelope: Envelope;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(_context: AudioContext) {
    super(_context);

    this._oscillator1 = new Oscillator('square', _context);
    this._oscillator2 = new Oscillator('square', _context);
    // this._oscillator3 = new Oscillator('square', _context);

    this._filter = new Filter(_context, {});

    this._filterEnvelope = new Envelope(_context);
    this._amplitudeEnvelope = new Envelope(_context);

    this._oscillator1.connect(this._filter.input);
    this._oscillator2.connect(this._filter.input);
    this._filter.connect(this._output);

    this._filterEnvelope.bind(
      this._filter.frequency,
      this._filter.options.frequency,
      this._filter.options.frequency * 10
    );
    this._amplitudeEnvelope.bind(this._output.gain);
  }

  play(note: number) {
    this._oscillator1.play(note);
    this._oscillator2.play(note);
    this._amplitudeEnvelope.trigger();
    this._filterEnvelope.trigger();
  }

  stop() {
    this._oscillator1.stop(this._amplitudeEnvelope.options.releaseTime);
    this._amplitudeEnvelope.release();
    this._filterEnvelope.release();
  }
}
