/**
 * Parent interface for effects options
 *
 */
export interface EffectOptions {
    /**
     * Options for _3BandEQ
     *
     */
    muted?: boolean;
    /**
     * Options for EffectOptions
     *
     */
    dryWet?: number;
    /**
     * Options for EffectOptions
     *
     */
    outputGain?: number;
}
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
    low?: _3BandEQBandOptions;
    mid?: _3BandEQBandOptions;
    high?: _3BandEQBandOptions;
}
/**
 * Options for _3BandEQ
 *
 */
export interface _3BandEQBandOptions {
    /**
     * Options for _3BandEQ
     *
     */
    gain?: number;
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
    /**
     * Options for _3BandEQ
     *
     */
    feedback?: number;
}
/**
 * Options for distortion
 *
 */
export interface DistortionOptions extends EffectOptions {
    /**
     * Options for _3BandEQ
     *
     */
    curve?: Float32Array;
    /**
     * Options for _3BandEQ
     *
     */
    oversample?: OverSampleType;
}
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
    Q?: number;
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
