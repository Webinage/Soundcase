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
import { Channel } from '../../types/abstractClasses';
/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 *  @class MixChannel
 *  @extends Channel
 *  @constructor
 * @augments parent
 *
 * @return {ChannelStrip} Return value description.
 */
var MixChannel = /** @class */ (function (_super) {
    __extends(MixChannel, _super);
    /**
     * Create a MixChannel.
     * @param {AudioContext}    _context    The audio context you run the channel strip in.
     */
    function MixChannel(_context) {
        var _this = _super.call(this, _context) || this;
        _this._input.connect(_this._output);
        return _this;
    }
    return MixChannel;
}(Channel));
export { MixChannel };
//# sourceMappingURL=MixChannel.class.js.map