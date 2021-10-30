"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 *  @class Classname
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
var Channel = /** @class */ (function () {
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Channel(_context) {
        this._context = _context;
        this._input = new GainNode(this._context);
        this._output = new GainNode(this._context);
    }
    Object.defineProperty(Channel.prototype, "input", {
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
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Channel.prototype, "output", {
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
        get: function () {
            return this._output;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Summary. (use period)
     *
     * Can connect to multiple nodes/channels
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
    // connect(effect: Effect<EffectOptions>): AudioNode;
    // connect(channel: Channel): AudioNode;
    // connect(node: AudioNode): AudioNode;
    Channel.prototype.connect = function (item) {
        // this._output.disconnect()
        if ('input' in item && 'output' in item) {
            this._output.connect(item.input);
            return item.output;
        }
        else {
            return this._output.connect(item);
        }
    };
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
    Channel.prototype.setGain = function (value) {
        this._output.gain.value = value;
    };
    return Channel;
}());
exports.Channel = Channel;
//# sourceMappingURL=Channel.abstract.class.js.map