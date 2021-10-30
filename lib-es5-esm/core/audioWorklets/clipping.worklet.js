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
import { AudioWorkletProcessor } from '../../types/missingInTypescript';
var ClippingProcessor = /** @class */ (function (_super) {
    __extends(ClippingProcessor, _super);
    function ClippingProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClippingProcessor.prototype.process = function (inputs, outputs, parameters) {
        var params = parameters;
        inputs[0].forEach(function (buffer) {
            console.log('buffer : ', buffer);
            for (var i = 0; i < buffer.length; i++) {
                var inputFloat32Array = inputs[0][i];
                var inputFloat32ArrayAbs = inputFloat32Array.map(function (value) { return Math.abs(value); });
                outputs[0][i] = inputFloat32ArrayAbs.map(function (value) { return (value >= 1 ? 1 : 0); });
                // if (absValue >= 1) {
                //   // break;
                // } else {
                // }
            }
        });
    };
    return ClippingProcessor;
}(AudioWorkletProcessor));
export { ClippingProcessor };
//# sourceMappingURL=clipping.worklet.js.map