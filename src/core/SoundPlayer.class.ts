import { Effect } from '../types/abstractClasses';
import { Channel } from '../types/abstractClasses/Channel.abstract.class';
import { EffectOptions, Sound } from '../types/interfaces';
import { Dic, SoundsLibrary } from '../types/types';
import { clamp } from '../utils';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface SoundElement {
  htmlAudioElement: HTMLAudioElement;
  mediaElementAudioSourceNode: MediaElementAudioSourceNode;
}

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
// export class SoundPlayer extends AudioInstrument {
export class SoundPlayer {
  private _audioElements: Dic<SoundElement> = {};

  protected _output: GainNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  // constructor(
  //   _context: AudioContext,
  //   _soundsLibrary: SoundsLibrary,
  //   effect?: Effect<EffectOptions>
  // );
  // constructor(
  //   _context: AudioContext,
  //   _soundsLibrary: SoundsLibrary,
  //   channel?: Channel
  // );
  // constructor(
  //   _context: AudioContext,
  //   _soundsLibrary: SoundsLibrary,
  //   node?: AudioNode
  // );
  constructor(
    private _context: AudioContext,
    private _soundsLibrary: SoundsLibrary,
    item?: AudioNode | Effect<EffectOptions> | Channel
  ) {
    this._output = new GainNode(this._context);

    if (item) {
      this.connect(item);
    } else {
      this.connect(this._context.destination);
    }
  }

  /**
   * Summary. (use period)
   *
   * Can connect to one node/channel only
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
    this._output.disconnect();
    if ('input' in item && 'output' in item && 'options' in item) {
      this._output.connect(item.input);
      return item.output;
    } else if ('input' in item && 'output' in item) {
      this._output.connect(item.input);
      return item.output;
    } else {
      return this._output.connect(item);
    }
  }

  // /**
  //  * Summary. (use period)
  //  *
  //  * Description. (use period)
  //  *
  //  * @see  Function/class relied on
  //  *
  //  * @param {type}   var           Description.
  //  * @param {type}   [var]         Description of optional variable.
  //  * @param {type}   [var=default] Description of optional variable with default variable.
  //  * @param {Object} objectVar     Description.
  //  * @param {type}   objectVar.key Description of a key in the objectVar parameter.
  //  *
  //  * @return {type} Return value description.
  //  */
  setSoundVolume(name: string, volume: number) {
    this._audioElements[name].htmlAudioElement.volume = clamp(volume, 0, 1);
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
  async playSound(name: string) {
    if (!this._audioElements[name]) {
      await this._loadSound(name);
    }
    if (this._soundsLibrary[name].type !== 'oneShotParallel') {
      this.stopSound(name);
    }
    this._audioElements[name].htmlAudioElement.play();
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
  pauseSound(name: string) {
    this._audioElements[name].htmlAudioElement.pause();
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
  stopSound(name: string) {
    this._audioElements[name].htmlAudioElement.pause();
    this._audioElements[name].htmlAudioElement.currentTime = 0;
  }

  private async _loadSound(name: string): Promise<void> {
    const sound: Sound = this._soundsLibrary[name];
    const htmlAudioElement = await this._handleSoundLoading(sound.path);

    this._audioElements[name] = {
      htmlAudioElement,
      mediaElementAudioSourceNode: this._context.createMediaElementSource(htmlAudioElement)
    };
    this._audioElements[name].htmlAudioElement.loop = sound.type === 'loop' ? true : false;
    this._audioElements[name].htmlAudioElement.volume = clamp(sound.volume, 0, 1);

    this._audioElements[name].mediaElementAudioSourceNode.connect(this._output);
    // .mediaElementAudioSourceNode.connect(this._channel.input);
    // .mediaElementAudioSourceNode.connect(this._context.destination);
  }

  private async _handleSoundLoading(path: string): Promise<HTMLAudioElement> {
    await new Promise((resolve, reject) => {
      const sound = new Audio(path);
      sound.oncanplaythrough = () => {
        resolve(sound);
      };
      sound.onerror = () => {
        console.log('onerror');
        reject();
      };
    });
    return new Promise(resolve => {
      const sound = new Audio(path);
      sound.oncanplaythrough = () => {
        resolve(sound);
      };
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
  setGain(value: number): void {
    this._output.gain.value = value;
  }
}
