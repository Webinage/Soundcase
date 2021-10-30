"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInCirc = exports.easeInExpo = exports.easeInQuint = exports.easeInQuart = exports.easeInCubic = exports.easeInQuad = exports.easeInSine = void 0;
var interpolation_1 = require("./interpolation");
function easeInSine(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = 1 - Math.cos((x * Math.PI) / 2);
    return interpolation_1.linear(f, a, b);
}
exports.easeInSine = easeInSine;
function easeInQuad(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x;
    return interpolation_1.linear(f, a, b);
}
exports.easeInQuad = easeInQuad;
function easeInCubic(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x * x;
    return interpolation_1.linear(f, a, b);
}
exports.easeInCubic = easeInCubic;
function easeInQuart(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x * x * x;
    return interpolation_1.linear(f, a, b);
}
exports.easeInQuart = easeInQuart;
function easeInQuint(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x * x * x * x;
    return interpolation_1.linear(f, a, b);
}
exports.easeInQuint = easeInQuint;
function easeInExpo(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    return interpolation_1.linear(f, a, b);
}
exports.easeInExpo = easeInExpo;
function easeInCirc(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = 1 - Math.sqrt(1 - Math.pow(x, 2));
    return interpolation_1.linear(f, a, b);
}
exports.easeInCirc = easeInCirc;
//# sourceMappingURL=acceleration.js.map