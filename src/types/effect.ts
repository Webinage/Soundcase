// export enum EffectType {
//   _3BandEQ = '_3BandEQ',
//   Delay = 'Delay',
//   Distortion = 'Distortion',
//   Filter = 'Filter',
//   Pan = 'Pan',
//   Reverb = 'Reverb',
// }

import { DistortionOptions, _3BandEQOptions } from '../classes';

export type EffectType =
  | '_3BandEQ'
  | 'Delay'
  | 'Distortion'
  | 'Filter'
  | 'Pan'
  | 'Reverb';

// export type Effect = _3BandEQ | Delay | Distortion | Filter | Pan | Reverb;

export type EffectOptions = _3BandEQOptions | DistortionOptions;
