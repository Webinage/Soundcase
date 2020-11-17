export function step(x: number, a: number = 0, b: number = 1): number {
  const median = a + (b - a) / 2;
  return x >= median ? b : a;
}

export function linear(x: number, a: number = 0, b: number = 1): number {
  return a * (1 - x) + b * x;
}

export function smoothStep(x: number, a: number = 0, b: number = 1): number {
  const f = x * x * (3.0 - 2.0 * x);
  return linear(f, a, b);
}

export function perlinSmoothStep(x: number, a: number = 0, b: number = 1) {
  const f = x * x * x * (x * (x * 6 - 15) + 10);
  return linear(f, a, b);
}

export function interpolateCosine(
  x: number,
  a: number = 0,
  b: number = 1
): number {
  const ft = x * Math.PI;
  const f = (1 - Math.cos(ft)) * 0.5;
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
