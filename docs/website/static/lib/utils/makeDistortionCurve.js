"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDistortionCurve = void 0;
/**
 * I am not sure what I am doing.
 *
 * @param {number}   amount   Distortion curve sharpening coef.
 *
 * @return {Float32Array} Return a float32 array containing curve data.
 */
function makeDistortionCurve(amount) {
    if (amount === void 0) { amount = 50; }
    var k = amount, n_samples = 44100, curve = new Float32Array(n_samples), deg = Math.PI / 180;
    var i = 0, x;
    for (; i < n_samples; ++i) {
        x = (i * 2) / n_samples - 1;
        curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
}
exports.makeDistortionCurve = makeDistortionCurve;
//# sourceMappingURL=makeDistortionCurve.js.map