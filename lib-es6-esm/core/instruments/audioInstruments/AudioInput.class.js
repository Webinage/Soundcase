var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export class AudioInput {
    /**
     * Create a point.uj;:
     * @param {number} x  The x value.
     */
    constructor(_context) {
        this._context = _context;
        this._muted = false;
        this._init();
    }
    _init() {
        return __awaiter(this, void 0, void 0, function* () {
            this._output = new GainNode(this._context);
            this._input = yield new Promise((resolve, reject) => {
                // TODO(smus): Remove this ugliness.
                var isLocalhost = window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1';
                if (window.location.protocol != 'https:' && !isLocalhost) {
                    reject('HTTPS is required for microphone access, and this site has no SSL cert yet. Sorry!');
                }
                navigator.getUserMedia({ audio: true }, stream => {
                    resolve(this._context.createMediaStreamSource(stream));
                }, err => {
                    reject(err);
                });
            });
            this._input.connect(this._output);
        });
    }
    /**
     * Set the gain level
     *
     */
    get gain() {
        return this._output.gain;
    }
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
    setGain(value) {
        this._output.gain.value = value;
    }
    /**
     * Get the muted effect status.
     *
     * @see  Function
     *
     * @return {type} Return the muted effect status.
     */
    get muted() {
        return this._muted;
    }
    /**
     * Get the muted effect status.
     *
     * @see  Function
     *
     * @return {type} Return the muted effect status.
     */
    setMuted(value) {
        if (value === true) {
            this._input.disconnect(this._output);
        }
        else {
            this._input.connect(this._output);
        }
    }
}
//# sourceMappingURL=AudioInput.class.js.map