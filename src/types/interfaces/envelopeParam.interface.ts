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
export interface EnvelopeParam {
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  param: AudioParam;
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  minValue?: number;
  /**
   * Create a point.
   * @param {number} x  The x value.
   */
  maxValue?: number;
}
