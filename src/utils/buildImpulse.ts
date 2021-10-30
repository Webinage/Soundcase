import { ReverbOptions } from '../types/interfaces';

/**
 * Utility function for building an impulse response from the options parameters.
 *
 * Based on https://github.com/web-audio-components/simple-reverb _buildImpulse for reverb method
 *
 * @param {ReverbOptions}   options   The reverb options that will be used to generate the impulse.
 *
 * @return {AudioBuffer}    Rutrn an audio buffer.
 */
export function buildImpulse(options: ReverbOptions): AudioBuffer {
  const rate = this._context.sampleRate,
    length = rate * options.seconds,
    decay = options.decay,
    impulse = this._context.createBuffer(2, length, rate),
    impulseL = impulse.getChannelData(0),
    impulseR = impulse.getChannelData(1);

  let n, i;
  for (i = 0; i < length; i++) {
    n = options.reverse ? length - i : i;
    impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
  }

  return impulse;
}
