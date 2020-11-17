/**
 * I am not sure what I am doing.
 *
 * @param {number}   amount   Distortion curve sharpening coef.
 *
 * @return {Float32Array} Return a float32 array containing curve data.
 */
export function makeDistortionCurve(
  amount: number = 100,
  sampleRate: number = 44100
): Float32Array {
  const k = amount,
    n_samples = sampleRate,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180;
  let i = 0,
    x;
  for (; i < n_samples; ++i) {
    x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}
