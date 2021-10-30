import { Effect } from '../../types/abstractClasses';
import { MyDelayOptions } from '../../types/interfaces';
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
    private readonly _delayNode;
    private readonly _feedbackNode;
    /**
     * Create a Delay.
     * @param {AudioContext} _context  The audio context the effect will run in.
     * @param {MyDelayOptions} options  The options the effect will be created with.
     */
    constructor(_context: AudioContext, options?: MyDelayOptions);
    /**
     *
     * @see function
     * @param {number}  value Value of the ....
     */
    private _rootWetChannel;
    /**
     * Set the low/mid frequency breakpoint
     *
     */
    get delayTime(): AudioParam;
    /**
     * Set the delay time.
     *
     * @see  Function
     *
     * @param {number}    delayTime   Delay time in seconds.
     */
    setDelayTime(delayTime: number): void;
    /**
     * Set the low/mid frequency breakpoint
     *
     */
    get feedback(): AudioParam;
    /**
     * Set the delay feedback gain.
     *
     * @see  Function
     *
     * @param {number}   value    Feedback gain. 1 is 100%.
     */
    setFeedback(value: number): void;
}
