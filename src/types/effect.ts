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

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export type EffectTypeName =
  | '_3BandEQ'
  | 'Delay'
  | 'Distortion'
  | 'Filter'
  | 'Pan'
  | 'Reverb';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export type EffectType = _3BandEQ | Delay | Distortion | Filter | Pan | Reverb;

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export type EffectOptions =
  | _3BandEQOptions
  | MyDelayOptions
  | DistortionOptions
  | FilterOptions
  | PanOptions
  | ReverbOptions;
