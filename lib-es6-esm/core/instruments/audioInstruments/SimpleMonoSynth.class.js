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
export class SimpleMonoSynth extends Synth {
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor(_context) {
        super(_context);
        this._oscillator1 = new Oscillator(_context);
        this._amplitudeEnvelope = new Envelope(_context);
        this._filter = new Filter(_context, {});
        this._oscillator1.connect(this._filter).connect(this._output);
        // this._amplitudeEnvelope.bind(this._output.gain);
    }
    play(note) {
        this._oscillator1.play(note);
    }
    stop() {
        this._oscillator1.stop();
    }
}
//# sourceMappingURL=SimpleMonoSynth.class.js.map