var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AudioInstrument } from './AudioInstrument.abstract.class';
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
var Synth = /** @class */ (function (_super) {
    __extends(Synth, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Synth(_context) {
        var _this = _super.call(this, _context) || this;
        _this._subscribeToInputs();
        return _this;
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
    Synth.prototype._subscribeToInputs = function () {
        var _this = this;
        this._midiInput.subscribe(function (message) {
            // console.log('message : ', message);
            if (message.type === 'NOTE_ON') {
                _this.play(message.note);
            }
            else if (message.type === 'NOTE_OFF') {
                _this.stop(message.note);
            }
        });
        this._keyboardInput.subscribe(function (message) {
            // console.log('message : ', message);
            if (message.type === 'NOTE_ON') {
                _this.play(message.note);
            }
            else if (message.type === 'NOTE_OFF') {
                _this.stop(message.note);
            }
        });
    };
    /**
     * Summary. (use period)
     *
     * Description. (use period)
     *
     * @see  Function/class relied on
     *
     * @return {type} Return value description.
     */
    Synth.prototype._unsubscribeToInputs = function () {
        this._midiInput.unsubscribe();
        this._keyboardInput.unsubscribe();
    };
    return Synth;
}(AudioInstrument));
export { Synth };
//# sourceMappingURL=Synth.abstract.class.js.map