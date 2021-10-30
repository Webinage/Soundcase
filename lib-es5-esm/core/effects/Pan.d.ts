import { Effect } from '../../types/abstractClasses';
import { PanOptions } from '../../types/interfaces';
/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Classname
 *  @extends ParentClass
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
export declare class Pan extends Effect<PanOptions> {
    private readonly _pannerNode;
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    constructor(_context: AudioContext, options?: PanOptions);
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
    get pan(): AudioParam;
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @param {type}   var           Description.
     * @param {type}   [var]         Description of optional variable.
     * @param {type}   [var=default] Description of optional variable with default variable.
     * @param {Object} objectVar     Description.
     * @param {type}   objectVar.key Description of a key in the objectVar parameter.
     *
     * @return {type} Return value description.
     */
    setPan(value: number): void;
}
