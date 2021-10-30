import { linear } from './interpolation';
export function easeInSine(x, a = 0, b = 1) {
    const f = 1 - Math.cos((x * Math.PI) / 2);
    return linear(f, a, b);
}
export function easeInQuad(x, a = 0, b = 1) {
    const f = x * x;
    return linear(f, a, b);
}
export function easeInCubic(x, a = 0, b = 1) {
    const f = x * x * x;
    return linear(f, a, b);
}
export function easeInQuart(x, a = 0, b = 1) {
    const f = x * x * x * x;
    return linear(f, a, b);
}
export function easeInQuint(x, a = 0, b = 1) {
    const f = x * x * x * x * x;
    return linear(f, a, b);
}
export function easeInExpo(x, a = 0, b = 1) {
    const f = x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    return linear(f, a, b);
}
export function easeInCirc(x, a = 0, b = 1) {
    const f = 1 - Math.sqrt(1 - Math.pow(x, 2));
    return linear(f, a, b);
}
//# sourceMappingURL=acceleration.js.map