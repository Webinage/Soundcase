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
var Monark = /** @class */ (function (_super) {
    __extends(Monark, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    function Monark(_context) {
        var _this = _super.call(this, _context) || this;
        _this._oscillator1 = new Oscillator(_context, {
            type: 'square',
            numberOfVoices: 3
        });
        _this._oscillator2 = new Oscillator(_context, {
            type: 'square',
            numberOfVoices: 3
        });
        // this._oscillator3 = new Oscillator(_context, { type: 'square', numberOfVoices: 1 });
        _this._filter = new Filter(_context, {});
        _this._filterEnvelope = new Envelope(_context, {
            envelopeType: 'linear',
            attackTime: 0,
            decayTime: 2000,
            sustainValue: 0,
            releaseTime: 100
        });
        _this._amplitudeEnvelope = new Envelope(_context);
        // this._oscillator1.connect(this._filter.input);
        // this._oscillator2.connect(this._filter.input);
        // this._filter.connect(this._output);
        _this._oscillator1.connect(_this._output);
        return _this;
        // this._oscillator2.connect(this._output);
        // this._filterEnvelope.bind(
        //   this._filter.frequency,
        //   this._filter.options.frequency,
        //   this._filter.options.frequency * 10
        // );
        // this._amplitudeEnvelope.bind(this._output.gain);
    }
    Monark.prototype.play = function (input) {
        this._oscillator1.play(input);
        // this._oscillator2.play(note);
        // this._amplitudeEnvelope.trigger();
        // this._filterEnvelope.trigger();
    };
    Monark.prototype.stop = function (note) {
        console.log('STOP NOTE : ', note);
        this._oscillator1.stop(note);
        // this._oscillator1.stop(note, this._amplitudeEnvelope.options.releaseTime);
        // this._oscillator2.stop(note, this._amplitudeEnvelope.options.releaseTime);
        // this._amplitudeEnvelope.release();
        // this._filterEnvelope.release();
    };
    return Monark;
}(Synth));
export { Monark };
//# sourceMappingURL=Monark.class.js.map