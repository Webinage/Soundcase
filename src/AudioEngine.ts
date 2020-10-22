import { SoundPlayer } from './classes';
import { ChannelStrip, MixChannel } from './classes/channels';
import {
  Delay,
  Distortion,
  DistortionOptions,
  Filter,
  FilterOptions,
  MyDelayOptions,
  Pan,
  PanOptions,
  Reverb,
  ReverbOptions,
  _3BandEQ,
  _3BandEQOptions
} from './classes/effects';
import { EffectType, EffectTypeName, SoundsLibrary } from './types';

export type EngineMixChannels =
  | 'soundEffectsChannel'
  | 'musicChannel'
  | 'ambianceChannel';

export class AudioEngine {
  // private _masterContext: AudioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  private _masterContext: AudioContext = new AudioContext();
  private _masterChannel: MixChannel = new MixChannel(this._masterContext);
  private _mixChannels: Map<EngineMixChannels, MixChannel> = new Map([
    ['soundEffectsChannel', new MixChannel(this._masterContext)],
    ['musicChannel', new MixChannel(this._masterContext)],
    ['ambianceChannel', new MixChannel(this._masterContext)]
  ]);

  private _channelStrips: Map<string, ChannelStrip> = new Map<
    string,
    ChannelStrip
  >();
  private _soundPlayers: Map<string, SoundPlayer> = new Map<
    string,
    SoundPlayer
  >();

  constructor() {
    this._mixChannels
      .get('soundEffectsChannel')
      .output.connect(this._masterChannel.input);
    this._mixChannels
      .get('musicChannel')
      .output.connect(this._masterChannel.input);
    this._mixChannels
      .get('ambianceChannel')
      .output.connect(this._masterChannel.input);
    this._masterChannel.output.connect(this._masterContext.destination);
  }

  get master() {
    return this._masterChannel;
  }

  // get mixChannels() {
  //   return this._mixChannels
  // }

  get soundEffectsChannel() {
    return this._mixChannels.get('soundEffectsChannel');
  }

  get musicChannel() {
    return this._mixChannels.get('musicChannel');
  }

  get ambianceChannel() {
    return this._mixChannels.get('ambianceChannel');
  }

  // get channelStrips() {
  //   return this._channelStrips
  // }

  createSoundPlayer(
    playerName: string,
    sounds: SoundsLibrary,
    mixChannelName?: EngineMixChannels
  ): SoundPlayer;
  createSoundPlayer(
    playerName: string,
    sounds: SoundsLibrary,
    channelStripName?: string
  ): SoundPlayer;
  createSoundPlayer(
    playerName: string,
    sounds: SoundsLibrary,
    channelName: any = 'soundEffectsChannel'
  ): SoundPlayer {
    this._soundPlayers.set(
      playerName,
      new SoundPlayer(
        this._masterContext,
        sounds,
        Object.keys(this._mixChannels).some(key => key === channelName)
          ? this._mixChannels.get(channelName)
          : this._channelStrips.get(channelName)
      )
    );

    return this._soundPlayers.get(playerName);
  }

  createEffect(effectType: '_3BandEQ', breakpoints?: _3BandEQOptions): _3BandEQ;
  createEffect(effectType: 'Delay', effectOptions?: MyDelayOptions): Delay;
  createEffect(
    effectType: 'Distortion',
    effectOptions?: DistortionOptions
  ): Distortion;
  createEffect(effectType: 'Filter', effectOptions?: FilterOptions): Filter;
  createEffect(effectType: 'Pan', effectOptions?: PanOptions): Pan;
  createEffect(effectType: 'Reverb', effectOptions?: ReverbOptions): Reverb;
  createEffect(effectType: EffectTypeName, options: any = {}): EffectType {
    if (effectType === '_3BandEQ') {
      return new _3BandEQ(this._masterContext, options);
    } else if (effectType === 'Delay') {
      return new Delay(this._masterContext, options);
    } else if (effectType === 'Distortion') {
      return new Distortion(this._masterContext, options);
    } else if (effectType === 'Filter') {
      return new Filter(this._masterContext, options);
    } else if (effectType === 'Pan') {
      return new Pan(this._masterContext, options);
    } else if (effectType === 'Reverb') {
      return new Reverb(this._masterContext, options);
    }
  }

  createChannelStrip(
    channelName: string,
    effects?: EffectType[],
    mixChannelName?: EngineMixChannels
  ): ChannelStrip;
  createChannelStrip(
    channelName: string,
    effects?: EffectType[],
    channelStripName?: string
  ): ChannelStrip;
  createChannelStrip(
    name: string,
    effects: EffectType[] = [],
    channelName: any = 'soundEffectsChannel'
  ): ChannelStrip {
    this._channelStrips.set(
      name,
      new ChannelStrip(this._masterContext, effects)
    );
    this._channelStrips
      .get(name)
      .output.connect(
        Object.keys(this._mixChannels).some(key => key === channelName)
          ? this._mixChannels.get(channelName).input
          : this._channelStrips.get(channelName).input
      );

    return this._channelStrips.get(name);
  }
}
