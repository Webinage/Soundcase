import { linear } from './interpolation';
export function easeInSine(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = 1 - Math.cos((x * Math.PI) / 2);
    return linear(f, a, b);
}
export function easeInQuad(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x;
    return linear(f, a, b);
}
export function easeInCubic(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x * x;
    return linear(f, a, b);
}
export function easeInQuart(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x * x * x;
    return linear(f, a, b);
}
export function easeInQuint(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x * x * x * x;
    return linear(f, a, b);
}
export function easeInExpo(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    return linear(f, a, b);
}
export function easeInCirc(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = 1 - Math.sqrt(1 - Math.pow(x, 2));
    return linear(f, a, b);
}
//# sourceMappingURL=acceleration.js.map