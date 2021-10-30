import { AudioEngine } from './core/AudioEngine';
// import * as audioWorklets from './core/audioWorklets';
// import * as ssr from './ssr.cheats';
import * as channels from './core/channels/index';
import * as effects from './core/effects/index';
import * as envelopes from './core/envelopes';
import * as inputs from './core/inputs';
import * as instruments from './core/instruments';
import * as oscillators from './core/oscillators';
import { SoundPlayer } from './core/SoundPlayer.class';
// // import * from './types/index';
import * as utils from './utils/index';

export default {
  // ssr,
  AudioEngine,
  SoundPlayer,
  channels,
  effects,
  envelopes,
  inputs,
  instruments,
  oscillators,
  utils
  // audioWorklets
};
