export function step(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var median = a + (b - a) / 2;
    return x >= median ? b : a;
}
export function linear(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    return a * (1 - x) + b * x;
}
export function smoothStep(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x * (3.0 - 2.0 * x);
    return linear(f, a, b);
}
export function perlinSmoothStep(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var f = x * x * x * (x * (x * 6 - 15) + 10);
    return linear(f, a, b);
}
export function interpolateCosine(x, a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 1; }
    var ft = x * Math.PI;
    var f = (1 - Math.cos(ft)) * 0.5;
    return linear(f, a, b);
}
// export function interpolateCubic( x: number,a: number=0, b: number=1): number {
//   // return a * (1 - smoothStep(a, b, x)) + b * smoothStep(a, b, x);
//   const f = interpolateSmoothStep(a, b, x);
//   return interpolateLinear( f,a, b);
// }
// // function interpolateCubic(v0, v1, v2, v3, x) {
// //     const p = (v3 - v2) - (v0 - v1);
// //     const q = (v0 - v1) - p;
// //     const r = v2 - v0;
// //     const s = v1;
// //     return p * x * x * x + q * x * x + r * x + s;
// // }
//# sourceMappingURL=interpolation.js.map