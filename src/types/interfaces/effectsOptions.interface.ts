/**
 * Parent interface for effects options
 *
 */
export interface EffectOptions {}

/**
 * Options for _3BandEQ
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
 * Options for Delay
 *
 */
export interface MyDelayOptions extends EffectOptions {
  delayTime?: number;
}
// Check DelayOptions

/**
 * Options for distortion
 *
 */
export interface DistortionOptions extends EffectOptions {
  curve?: Float32Array | number[];
  oversample?: OverSampleType;
}
// Check WaveShaperOptions

/**
 * Options for filter
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
 * Options for pan (panning)
 *
 */
export interface PanOptions extends EffectOptions {
  pan?: number;
}
// Check PannerOptions

/**
 * Options for reverb
 *
 */
export interface ReverbOptions extends EffectOptions {}
// Check ConvolverOptions
