import { Effect } from '../types/abstractClasses';
import { EffectsNames } from '../types/enums';
import {
  DistortionOptions,
  EffectOptions,
  FilterOptions,
  MyDelayOptions,
  PanOptions,
  ReverbOptions,
  _3BandEQOptions
} from '../types/interfaces';
import { Dic, SoundsLibrary } from '../types/types';
import { ChannelStrip, MixChannel } from './channels';
import { Delay, Distortion, Filter, Pan, Reverb, _3BandEQ } from './effects';
import { SoundPlayer } from './SoundPlayer.class';

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
  // private _masterContext: AudioContext = new (window.AudioContext ||
  //   window.webkitAudioContext)();

  /**
   * Create a MixChannel.
   */
  private _masterContext: AudioContext = new AudioContext();
  /**
   * Create a MixChannel.
   */
  private _masterChannel: MixChannel = new MixChannel(this._masterContext);
  // private _masterContext: AudioContext;
  // private _masterChannel: MixChannel;

  /**
   * Create a MixChannel.
   */
  private _mixChannels: Dic<MixChannel> = {};

  /**
   * Create a MixChannel.
   */
  private _channelStrips: Dic<ChannelStrip> = {};
  /**
   * Create a MixChannel.
   */
  private _soundPlayers: Dic<SoundPlayer> = {};

  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  constructor() {
    // window.AudioContext = window.AudioContext || window.webkitAudioContext;
    // this._masterContext = new AudioContext();
    this._masterChannel.output.connect(this._masterContext.destination);
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
  get masterChannel() {
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
  get mixChannels() {
    return this._mixChannels;
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
  getMixChannel(channelName: string) {
    return this._mixChannels[channelName];
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
  get channelStrips() {
    return this._channelStrips;
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
  getChannelStrip(channelName: string) {
    return this._channelStrips[channelName];
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
  get soundPlayers() {
    return this._soundPlayers;
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
  getSoundPlayer(playerName: string) {
    return this._soundPlayers[playerName];
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
    channelName: string = 'master'
  ): SoundPlayer {
    this._soundPlayers[playerName] = new SoundPlayer(
      this._masterContext,
      sounds,
      this._channelToConnectNode(channelName)
    );

    // conect to master channel

    return this._soundPlayers[playerName];
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
   * Create a mixChannel and connect it to the chosen channel or master
   *
   * It will connect the mixChannel to the master channel.
   *
   * @see  Function
   *
   * @param {string}    name    The name of the mixChannel you want to create.
   *
   * @return {MixChannel} Return a mixChannel.
   */
  createMixChannel(channelName: string): MixChannel {
    this._mixChannels[channelName] = new MixChannel(this._masterContext);
    this._mixChannels[channelName].output.connect(this._masterChannel.input);

    return this._mixChannels[channelName];
  }

  /**
   * Create a channelStrip for effects and connect it to the chosen channel or master
   *
   * If no channelName is provided, it will connect to the master channel by default.
   *
   * @see  Function
   *
   * @param {string}                    name                      The name of the channelStrip you want to create.
   * @param {Effect<EffectOptions>[]}   [effects=[]]              The effects you want to start your channel with.
   * @param {type}                      [channelName='master']    The mixChannel or effectsChannel you want to connect your channel to.
   *
   * @return {ChannelStrip} Return a channelStrip.
   */
  createChannelStrip(
    name: string,
    effects: Effect<EffectOptions>[] = [],
    channelName: string = 'master'
  ): ChannelStrip {
    this._channelStrips[name] = new ChannelStrip(this._masterContext, effects);
    this._channelStrips[name].output.connect(
      this._channelToConnectNode(channelName)
    );

    return this._channelStrips[name];
  }

  private _channelToConnectNode(channelName: string): AudioNode {
    return channelName === 'master'
      ? this._masterChannel.input
      : Object.keys(this._mixChannels).some(key => key === channelName)
      ? this._mixChannels[channelName].input
      : Object.keys(this._channelStrips).some(key => key === channelName)
      ? this._channelStrips[channelName].input
      : this._masterChannel.input;
  }
}
