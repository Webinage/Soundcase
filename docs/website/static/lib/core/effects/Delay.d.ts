import { Effect, MyDelayOptions } from '../../types';
/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Delay
 *  @extends Effect
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export declare class Delay extends Effect<MyDelayOptions> {
    private _dryChannel;
    private _wetChannel;
    private _channelSplitter;
    private _channelMerger;
    private _leftDelayNode;
    private _rightDelayNode;
    private _feedbackNode;
    private _dryWetRatio;
    /**
     * Create a Delay.
     * @param {AudioContext} _context  The audio context the effect will run in.
     * @param {MyDelayOptions} options  The options the effect will be created with.
     */
    constructor(_context: AudioContext, options?: MyDelayOptions, dryWetRatio?: number);
    /**
     * Set the effect dry/wet ratio
     *
     * @see  Function
     *
     * @param {number}   ratio    Dry/wet ratio. 1 is for 100%
     */
    setDryWetRatio(ratio: number): void;
    /**
     * Set the delay time.
     *
     * @see  Function
     *
     * @param {number}    delayTime   Delay time in seconds.
     */
    setDelayTime(delayTime: number): void;
    /**
     * Set the delay feedback gain.
     *
     * @see  Function
     *
     * @param {number}   value    Feedback gain. 1 is 100%.
     */
    setFeedback(value: number): void;
}
