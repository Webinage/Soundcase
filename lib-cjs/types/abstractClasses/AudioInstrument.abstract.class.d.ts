import { KeyboardInput } from '../../core/inputs/KeyboardInput';
import { MidiInput } from '../../core/inputs/MidiInput';
import { EffectOptions } from '../interfaces/effectsOptions.interface';
import { Channel } from './Channel.abstract.class';
import { Effect } from './Effect.abstract.class';
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
export declare abstract class AudioInstrument extends Instrument {
    protected _context: AudioContext;
    protected readonly _output: GainNode;
    protected readonly _midiInput: MidiInput;
    protected readonly _keyboardInput: KeyboardInput;
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor(_context: AudioContext);
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
    setGain(value: number): void;
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
    connect(item: AudioNode | Effect<EffectOptions> | Channel): AudioNode;
}
