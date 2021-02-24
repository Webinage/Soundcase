import { AudioInstrument } from './AudioInstrument.abstract.class';

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
export abstract class Synth extends AudioInstrument {
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(_context: AudioContext) {
    super(_context);

    this._subscribeToInputs();
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
  private _subscribeToInputs() {
    this._midiInput.subscribe(message => {
      // console.log('message : ', message);
      if (message.type === 'NOTE_ON') {
        this.play(message.note);
      } else if (message.type === 'NOTE_OFF') {
        this.stop(message.note);
      }
    });

    this._keyboardInput.subscribe(message => {
      // console.log('message : ', message);
      if (message.type === 'NOTE_ON') {
        this.play(message.note);
      } else if (message.type === 'NOTE_OFF') {
        this.stop(message.note);
      }
    });
  }

  abstract play(input: number | number[]): void;

  abstract stop(input?: number | number[]): void;

  /**
   * Summary. (use period)
   *
   * Description. (use period)
   *
   * @see  Function/class relied on
   *
   * @return {type} Return value description.
   */
  private _unsubscribeToInputs() {
    this._midiInput.unsubscribe();
    this._keyboardInput.unsubscribe();
  }
}
