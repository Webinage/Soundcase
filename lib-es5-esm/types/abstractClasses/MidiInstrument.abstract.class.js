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
import { Instrument } from './Instrument.abstract.class';
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
var MidiInstrument = /** @class */ (function (_super) {
    __extends(MidiInstrument, _super);
    /**
     * Create a point.
     * @param {number} x  The x value.
     */
    // constructor(protected _context: AudioContext) {
    function MidiInstrument() {
        return _super.call(this) || this;
    }
    return MidiInstrument;
}(Instrument));
export { MidiInstrument };
//# sourceMappingURL=MidiInstrument.abstract.class.js.map