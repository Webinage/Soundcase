import { Channel, Effect } from '../../types/abstractClasses';
import { OscillatorType } from '../../types/enums';
import { EffectOptions } from '../../types/interfaces';
import { clamp } from '../../utils';

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
export class Oscillator {
  private _hasStarted: boolean = false;
  private _oscillator: OscillatorNode;
  private _output: GainNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(private _type: OscillatorType, private _context: AudioContext) {
    this._output = new GainNode(this._context);

    this._oscillator = new OscillatorNode(this._context);
    if (this._type === 'sine') {
      this._oscillator.type = 'sine';
    } else if (this._type === 'triangle') {
      this._oscillator.type = 'triangle';
    } else if (this._type === 'square') {
      this._oscillator.type = 'sawtooth';
    } else if (this._type === 'sawtooth') {
      this._oscillator.type = 'sawtooth';
    }

    this._oscillator.connect(this._output);
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
  set frequency(value: number) {
    this._oscillator.frequency.value = clamp(value, 1, 20000);
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
    this._oscillator.detune.value = clamp(value, 0, 100);
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
    note: number
    // velocity?: number,
    // duration?: number
  ): void {
    this._oscillator.frequency.value = note;
    if (this._hasStarted) {
      this._oscillator.connect(this._output);
    } else {
      this._oscillator.start();
      this._hasStarted = true;
    }
    // this._output.gain.value = value;
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
  stop(after?: number): void {
    // this._oscillator.stop();
    if (this._hasStarted) {
      if (after) {
        setTimeout(() => {
          this._oscillator.disconnect();
        }, after);
      } else {
        this._oscillator.disconnect();
      }
    }
  }
}
