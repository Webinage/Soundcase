import { Effect, EffectOptions, Sound, SoundsLibrary } from '../../types';
import { Channel } from '../../types/abstractClasses/Channel.abstract.class';

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
export class SoundPlayer {
  private _audioElements: Map<string, SoundElement> = new Map<
    string,
    SoundElement
  >();
  private _output: GainNode;

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor(
    _context: AudioContext,
    _soundsLibrary: SoundsLibrary,
    effect?: Effect<EffectOptions>
  );
  constructor(
    _context: AudioContext,
    _soundsLibrary: SoundsLibrary,
    channel?: Channel
  );
  constructor(
    _context: AudioContext,
    _soundsLibrary: SoundsLibrary,
    node?: AudioNode
  );
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
  async playSound(name: string, volume = this._soundsLibrary.get(name).volume) {
    if (!this._audioElements.get(name)) {
      await this.loadSound(name, volume);
    }
    if (this._soundsLibrary.get(name).type !== 'oneShotParallel') {
      this.stopSound(name);
    }
    this._audioElements.get(name).htmlAudioElement.play();
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
    this._audioElements.get(name).htmlAudioElement.pause();
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
    this._audioElements.get(name).htmlAudioElement.pause();
    this._audioElements.get(name).htmlAudioElement.currentTime = 0;
  }

  private async loadSound(name: string, volume: number): Promise<void> {
    const sound: Sound = this._soundsLibrary.get(name);
    const htmlAudioElement = await this.handleSoundLoading(sound.path);

    this._audioElements.set(name, {
      htmlAudioElement,
      mediaElementAudioSourceNode: this._context.createMediaElementSource(
        htmlAudioElement
      )
    });
    this._audioElements.get(name).htmlAudioElement.loop =
      sound.type === 'loop' ? true : false;
    this._audioElements.get(name).htmlAudioElement.volume = volume;

    this._audioElements.get(name);
    // .mediaElementAudioSourceNode.connect(this._output);
    // .mediaElementAudioSourceNode.connect(this._channel.input);
    // .mediaElementAudioSourceNode.connect(this._context.destination);
  }

  private async handleSoundLoading(path: string): Promise<HTMLAudioElement> {
    await new Promise((resolve, reject) => {
      const sound = new Audio(path);
      sound.oncanplaythrough = () => {
        resolve(sound);
      };
    });
    return new Promise((resolve, reject) => {
      const sound = new Audio(path);
      sound.oncanplaythrough = () => {
        resolve(sound);
      };
    });
  }
}
