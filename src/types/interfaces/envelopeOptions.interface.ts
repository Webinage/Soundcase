import { EnvelopeType } from '../enums';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * @property {string} path        Relative path to the sound file.
 *
 * @property {SoundType} type     Sound playback method.
 *
 * @property {number} volume      Sound volume coeficient. 1 is for 100%.
 *
 */
export interface EnvelopeOptions {
  /**
   * Options for _3BandEQ
   *
   */
  muted?: boolean;
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  envelopeType?: EnvelopeType;
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  attackTime?: number;
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  releaseTime?: number;
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  sustainValue?: number;
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  decayTime?: number;
}
