import { Channel, Sound, SoundsLibrary } from '../types';

export interface SoundElement {
  htmlAudioElement: HTMLAudioElement;
  mediaElementAudioSourceNode: MediaElementAudioSourceNode;
}

export class SoundPlayer {
  private _audioElements: Map<string, SoundElement> = new Map<
    string,
    SoundElement
  >();
  private _output: GainNode;

  constructor(
    private _context: AudioContext,
    private _soundsLibrary: SoundsLibrary,
    private _channel: Channel
  ) {
    this._output = new GainNode(this._context);
  }

  connect(channel: Channel) {
    this._channel = channel;
    this._output.disconnect();
    this._output.connect(channel.input);
  }

  async playSound(name: string, volume = this._soundsLibrary.get(name).volume) {
    if (!this._audioElements.get(name)) {
      await this.loadSound(name, volume);
    }
    if (this._soundsLibrary.get(name).type !== 'oneShotParallel') {
      this.stopSound(name);
    }
    this._audioElements.get(name).htmlAudioElement.play();
  }

  pauseSound(name: string) {
    this._audioElements.get(name).htmlAudioElement.pause();
  }

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

    this._audioElements
      .get(name)
      .mediaElementAudioSourceNode.connect(this._channel.input);
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
