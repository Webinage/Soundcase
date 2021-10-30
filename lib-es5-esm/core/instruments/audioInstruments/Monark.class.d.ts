import { Synth } from '../../../types/abstractClasses';
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
export declare class Monark extends Synth {
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
    constructor(_context: AudioContext);
    play(input: number): void;
    stop(note: number): void;
}
