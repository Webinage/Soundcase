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
} from '../classes';

export type EffectTypeName =
  | '_3BandEQ'
  | 'Delay'
  | 'Distortion'
  | 'Filter'
  | 'Pan'
  | 'Reverb';

export type EffectType = _3BandEQ | Delay | Distortion | Filter | Pan | Reverb;

export type EffectOptions =
  | _3BandEQOptions
  | MyDelayOptions
  | DistortionOptions
  | FilterOptions
  | PanOptions
  | ReverbOptions;
