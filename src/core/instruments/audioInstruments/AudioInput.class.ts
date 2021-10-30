import { Channel, Effect } from '../../../types/abstractClasses';
import { EffectOptions } from '../../../types/interfaces';

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
export class AudioInput {
  private _output: GainNode;
  private _input: MediaStreamAudioSourceNode;
  private _muted: boolean = false;

  /**
   * Create a point.uj;:
   * @param {number} x  The x value.
   */
  constructor(private _context: AudioContext, item?: AudioNode | Effect<EffectOptions> | Channel) {
    this._init(item);
  }

  private async _init(item?: AudioNode | Effect<EffectOptions> | Channel) {
    this._output = new GainNode(this._context);

    this._input = await new Promise<MediaStreamAudioSourceNode>((resolve, reject) => {
      // TODO(smus): Remove this ugliness.
      var isLocalhost = window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1';
      if (window.location.protocol != 'https:' && !isLocalhost) {
        reject('HTTPS is required for microphone access, and this site has no SSL cert yet. Sorry!');
      }
      navigator.getUserMedia(
        { audio: true },
        stream => {
          resolve(this._context.createMediaStreamSource(stream));
        },
        err => {
          reject(err);
        }
      );
    });

    this._input.connect(this._output);

    if (item) {
      this.connect(item);
    } else {
      this.connect(this._context.destination);
    }
  }

  /**
   * Set the gain level
   *
   */
  get gain() {
    return this._output.gain;
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
  setGain(value: number) {
    this._output.gain.value = value;
  }

  /**
   * Get the muted effect status.
   *
   * @see  Function
   *
   * @return {type} Return the muted effect status.
   */
  get muted(): boolean {
    return this._muted;
  }

  /**
   * Get the muted effect status.
   *
   * @see  Function
   *
   * @return {type} Return the muted effect status.
   */
  setMuted(value: boolean) {
    if (value === true) {
      this._input.disconnect(this._output);
    } else {
      this._input.connect(this._output);
    }
  }

  /**
   * Get the efect input.
   *
   * @see  Function
   *
   * @return {type} Return the effect input.
   */
  get input() {
    return this._input;
  }

  /**
   * Get the effect output.
   *
   * @see  Function
   *
   * @return {type} Return the effect output.
   */
  get output() {
    return this._output;
  }

  // get options() {
  //   return {};
  // }

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
}
