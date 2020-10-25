import {
  DistortionOptions,
  Effect,
  EffectOptions,
  EffectsNames,
  FilterOptions,
  MyDelayOptions,
  PanOptions,
  ReverbOptions,
  SoundsLibrary,
  _3BandEQOptions
} from '../types';
import { ChannelStrip, MixChannel } from './channels';
import { Delay, Distortion, Filter, Pan, Reverb, _3BandEQ } from './effects';
import { SoundPlayer } from './instruments';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export type EngineMixChannels =
  | 'soundEffectsChannel'
  | 'musicChannel'
  | 'ambianceChannel';

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
  // get mixChannels() {
  //   return this._mixChannels
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
  get soundEffectsChannel() {
    return this._mixChannels.get('soundEffectsChannel');
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
  get musicChannel() {
    return this._mixChannels.get('musicChannel');
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
  get ambianceChannel() {
    return this._mixChannels.get('ambianceChannel');
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
  // get channelStrips() {
  //   return this._channelStrips
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
  // createSoundPlayer(
  //   playerName: string,
  //   sounds: SoundsLibrary,
  //   mixChannelName?: EngineMixChannels
  // ): SoundPlayer;
  // createSoundPlayer(
  //   playerName: string,
  //   sounds: SoundsLibrary,
  //   channelStripName?: string
  // ): SoundPlayer;
  createSoundPlayer(
    playerName: string,
    sounds: SoundsLibrary,
    channelName: EngineMixChannels | string = 'soundEffectsChannel'
  ): SoundPlayer {
    this._soundPlayers.set(
      playerName,
      new SoundPlayer(
        this._masterContext,
        sounds,
        Object.keys(this._mixChannels).some(key => key === channelName)
          ? this._mixChannels.get(channelName as EngineMixChannels)
          : this._channelStrips.get(channelName)
      )
    );

    return this._soundPlayers.get(playerName);
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
  createEffect(effectType: '_3BandEQ', options?: _3BandEQOptions): _3BandEQ;
  createEffect(effectType: 'Delay', options?: MyDelayOptions): Delay;
  createEffect(
    effectType: 'Distortion',
    options?: DistortionOptions
  ): Distortion;
  createEffect(effectType: 'Filter', options?: FilterOptions): Filter;
  createEffect(effectType: 'Pan', options?: PanOptions): Pan;
  createEffect(effectType: 'Reverb', options?: ReverbOptions): Reverb;
  createEffect(
    effectType: EffectsNames,
    options: EffectOptions = {}
  ): Effect<EffectOptions> {
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
  createChannelStrip(
    channelName: string,
    effects?: Effect<EffectOptions>[],
    mixChannelName?: EngineMixChannels
  ): ChannelStrip;
  createChannelStrip(
    channelName: string,
    effects?: Effect<EffectOptions>[],
    channelStripName?: string
  ): ChannelStrip;
  createChannelStrip(
    name: string,
    effects: Effect<EffectOptions>[] = [],
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
