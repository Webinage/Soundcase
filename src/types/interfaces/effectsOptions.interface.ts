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
  /**
   * Options for _3BandEQ
   *
   */
  breakPoints?: {
    /**
     * Options for _3BandEQ
     *
     */
    lowMid: number;

    /**
     * Options for _3BandEQ
     *
     */
    midHigh: number;
  };

  /**
   * Options for _3BandEQ
   *
   */
  Q?: number;

  /**
   * Options for _3BandEQ
   *
   */
  detune?: number;
}
// Check BiquadFilterOptions

/**
 * Options for Delay
 *
 */
export interface MyDelayOptions extends EffectOptions {
  /**
   * Options for _3BandEQ
   *
   */
  delayTime?: number;
}
// Check DelayOptions

/**
 * Options for distortion
 *
 */
export interface DistortionOptions extends EffectOptions {
  /**
   * Options for _3BandEQ
   *
   */
  curve?: Float32Array | number[];
  /**
   * Options for _3BandEQ
   *
   */
  oversample?: OverSampleType;
}
// Check WaveShaperOptions

/**
 * Options for filter
 *
 */
export interface FilterOptions extends EffectOptions {
  /**
   * Options for _3BandEQ
   *
   */
  type?: BiquadFilterType;
  /**
   * Options for _3BandEQ
   *
   */
  Qu?: number;
  /**
   * Options for _3BandEQ
   *
   */
  frequency?: number;
  /**
   * Options for _3BandEQ
   *
   */
  detune?: number;
  /**
   * Options for _3BandEQ
   *
   */
  gain?: number;
}
// Check BiquadFilterOptions

/**
 * Options for pan (panning)
 *
 */
export interface PanOptions extends EffectOptions {
  /**
   * Options for _3BandEQ
   *
   */
  pan?: number;
}
// Check PannerOptions

/**
 * Options for reverb
 *
 */
export interface ReverbOptions extends EffectOptions {
  /**
   * Options for _3BandEQ
   *
   */
  seconds?: number;
  /**
   * Options for _3BandEQ
   *
   */
  decay?: number;
  /**
   * Options for _3BandEQ
   *
   */
  reverse?: boolean;
}
// Check ConvolverOptions

/**
 * Options for reverb
 *
 */
export interface ConvolutionReverbOptions extends EffectOptions {}
// Check ConvolverOptions
