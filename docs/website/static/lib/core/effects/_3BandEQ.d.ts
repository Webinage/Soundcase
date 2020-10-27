import { Effect, _3BandEQOptions } from '../../types';
/**
 * A 3 band equalizer
 *
 *  @class _3BandEQ
 *  @extends Effect
 *  @constructor
 * @augments parent
 *
 * @return {_3BandEQ} Return a _3BandEQ
 */
export declare class _3BandEQ extends Effect<_3BandEQOptions> {
    private _lowFilterNode;
    private _lowFilterChannel;
    private _midFilterNode;
    private _midFilterChannel;
    private _highFilterNode;
    private _highFilterChannel;
    /**
     * Create a _3BandEQ.
     * @param {AudioContext} _context  The audio context the effect will run in.
     * @param {_3BandEQOptions} options  The options the effect will be created with.
     */
    constructor(_context: AudioContext, options?: _3BandEQOptions);
    /**
     * Set the low/mid frequency breakpoint
     *
     * @see  Function
     *
     * @param {number}   value    Value of the frequency breakpoitn.
     */
    setLowMidFrequencyBreakpoint(value: number): void;
    /**
     * Set the low/mid frequency breakpoint
     *
     * @see  Function
     *
     * @param {number}   value    Value of the frequency breakpoitn.
     */
    setMidHighFrequencyBreakpoint(value: number): void;
    /**
     * Set the gain for the low frequency band
     *
     * @see  Function
     *
     * @param {number}   value    Gain value. 1 is for 100%
     */
    setLowGain(value: number): void;
    /**
     * Set the Q for the low frequency band.
     *
     * @see  Function
     *
     * @param {number}   value    Q value.
     */
    setLowQ(value: number): void;
    /**
     * Set the gain for the mid frequency band
     *
     * @see  Function
     *
     * @param {number}   value    Gain value. 1 is for 100%
     */
    setMidGain(value: number): void;
    /**
     * Set the Q for the mid frequency band.
     *
     * @see  Function
     *
     * @param {number}   value    Q value.
     */
    setMidQ(value: number): void;
    /**
     * Set the gain for the high frequency band
     *
     * @see  Function
     *
     * @param {number}   value    Gain value. 1 is for 100%
     */
    setHighGain(value: number): void;
    /**
     * Set the Q for the high frequency band.
     *
     * @see  Function
     *
     * @param {number}   value    Q value.
     */
    setHighQ(value: number): void;
}
