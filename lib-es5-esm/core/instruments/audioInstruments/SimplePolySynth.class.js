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
import { Synth } from '../../../types/abstractClasses';
import { Filter } from '../../effects';
import { Envelope } from '../../envelopes';
import { Oscillator } from '../../oscillators';
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
var SimplePolySynth = /** @class */ (function (_super) {
    __extends(SimplePolySynth, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function SimplePolySynth(_context) {
        var _this = _super.call(this, _context) || this;
        _this._oscillator1 = new Oscillator(_context, {
            type: 'square',
            numberOfVoices: 8
        });
        _this._amplitudeEnvelope = new Envelope(_context);
        _this._filter = new Filter(_context, {});
        _this._oscillator1.connect(_this._filter).connect(_this._output);
        return _this;
        // this._amplitudeEnvelope.bind(this._output.gain);
    }
    SimplePolySynth.prototype.play = function (note) {
        this._oscillator1.play(note);
    };
    SimplePolySynth.prototype.stop = function (note) {
        this._oscillator1.stop(note);
    };
    return SimplePolySynth;
}(Synth));
export { SimplePolySynth };
//# sourceMappingURL=SimplePolySynth.class.js.map