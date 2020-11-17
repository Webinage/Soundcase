import { linear } from './interpolation';

export function easeInSine(x: number, a: number = 0, b: number = 1): number {
  const f = 1 - Math.cos((x * Math.PI) / 2);
  return linear(f, a, b);
}

export function easeInQuad(x: number, a: number = 0, b: number = 1): number {
  const f = x * x;
  return linear(f, a, b);
}

export function easeInCubic(x: number, a: number = 0, b: number = 1): number {
  const f = x * x * x;
  return linear(f, a, b);
}

export function easeInQuart(x: number, a: number = 0, b: number = 1): number {
  const f = x * x * x * x;
  return linear(f, a, b);
}

export function easeInQuint(x: number, a: number = 0, b: number = 1): number {
  const f = x * x * x * x * x;
  return linear(f, a, b);
}

export function easeInExpo(x: number, a: number = 0, b: number = 1): number {
  const f = x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  return linear(f, a, b);
}

export function easeInCirc(x: number, a: number = 0, b: number = 1): number {
  const f = 1 - Math.sqrt(1 - Math.pow(x, 2));
  return linear(f, a, b);
}
