/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface EffectOptions {}

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface _3BandEQOptions extends EffectOptions {
  breakPoints?: {
    lowMid: number;
    midHigh: number;
  };
  Q?: number;
  detune?: number;
}
// Check BiquadFilterOptions

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface MyDelayOptions extends EffectOptions {
  delayTime?: number;
}
// Check DelayOptions

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface DistortionOptions extends EffectOptions {
  curve?: Float32Array | number[];
  oversample?: OverSampleType;
}
// Check WaveShaperOptions

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface FilterOptions extends EffectOptions {
  type?: BiquadFilterType;
  Qu?: number;
  frequency?: number;
  detune?: number;
  gain?: number;
}
// Check BiquadFilterOptions

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface PanOptions extends EffectOptions {
  pan?: number;
}
// Check PannerOptions

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export interface ReverbOptions extends EffectOptions {}
// Check ConvolverOptions
