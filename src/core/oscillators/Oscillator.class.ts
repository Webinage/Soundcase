import { Channel, Effect, HasOptions } from '../../types/abstractClasses';
import { InternationalNotes } from '../../types/enums';
import { EffectOptions, MyOscillatorOptions } from '../../types/interfaces';
import { clamp } from '../../utils';

interface Voice {
  // isPlaying: boolean;
  note: number;
  oscillator: OscillatorNode;
}

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Classname
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export class Oscillator extends HasOptions<MyOscillatorOptions> {
  private _voices: Voice[] = [];

  // private _hasStarted: boolean = false;
  private _output: GainNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(private _context: AudioContext, options: MyOscillatorOptions = {}) {
    // super(options);
    super();
    this._output = new GainNode(this._context);

    this._updateOptions<MyOscillatorOptions>({
      ...{
        type: 'square',
        numberOfVoices: 1
      },
      ...options
    });
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
  get gain(): AudioParam {
    return this._output.gain;
  }

  /**
   * Get the effect output.
   *
   * @see  Function
   *
   * @param  {type} name Description
   *
   * @return {type} Description.
   */
  set detune(value: number) {
    this._updateOptions<OscillatorOptions>({ detune: value });
    this._voices.forEach(voice => {
      voice.oscillator.detune.value = clamp(value, 0, 100);
    });
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
  connect(item: AudioNode | Effect<EffectOptions> | Channel): AudioNode {
    if ('input' in item && 'output' in item) {
      this._output.connect(item.input);
      return item.output;
    } else {
      return this._output.connect(item);
    }
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
  disconnect() {
    return this._output.disconnect();
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
  // TO DO Overload de méthode
  play(
    // note: MidiNotes | InternationalNotes | number,
    input: number | number[] | InternationalNotes | InternationalNotes[]
    // velocity?: number,
    // duration?: number
  ): void {
    const notes = typeof input === 'number' ? [input] : input;

    notes.forEach(note => {
      const isPresentInVoices: boolean = this._voices.findIndex(oscillator => oscillator.note === note) >= 0;
      const voicesIsFull: boolean = this._voices.length >= this.options.numberOfVoices;

      if (!isPresentInVoices && !voicesIsFull) {
        const oscillator = new OscillatorNode(this._context);
        oscillator.type = this.options.type;
        oscillator.frequency.value = note;
        oscillator.connect(this._output);

        this._voices.push({
          note,
          oscillator
        });

        oscillator.start();
      } else if (this.options.numberOfVoices === 1) {
        this._voices[0].oscillator.frequency.value = note;
      }
    });

    console.log('PLAY this._voices : ', this._voices);
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
  stop(note?: number, after?: number): void {
    console.log('0');
    if (note) {
      console.log('1');
      const presentVoiceIndex = this._voices.findIndex(oscillator => oscillator.note === note);
      console.log('presentVoiceIndex : ', presentVoiceIndex);

      if (presentVoiceIndex >= 0) {
        console.log('3');

        if (after) {
          console.log('5');

          setTimeout(() => {
            this._voices[presentVoiceIndex].oscillator.stop();
            this._voices.splice(presentVoiceIndex, 1);
            // this._voices = this._voices.filter(voice => voice.note == note);
          }, after);
        } else {
          console.log('6');

          this._voices[presentVoiceIndex].oscillator.stop();
          this._voices.splice(presentVoiceIndex, 1);
          // this._voices = this._voices.filter(voice => voice.note == note);
        }
      } else if (this.options.numberOfVoices === 1) {
        console.log('4');

        this._voices[0].oscillator.stop();
        // this._voices.splice(0, 1);
        // this._voices.pop();
        this._voices = [];
      }
    } else {
      console.log('2');

      this._voices.forEach(voice => {
        voice.oscillator.stop();
      });
      this._voices = [];
    }

    console.log('STOP this._voices : ', this._voices);
  }
}
