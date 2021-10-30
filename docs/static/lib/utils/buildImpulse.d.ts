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
export declare function buildImpulse(options: ReverbOptions): AudioBuffer;
