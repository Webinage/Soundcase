import { Dic } from '.';

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
export interface Sound {
  path: string;
  type: SoundType;
  volume: number;
}

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export type SoundType = 'oneShot' | 'oneShotParallel' | 'loop';

/**
 * Summary. (A channel to handle single/multiple effects)
 *
 * Description. (A channel to handle single/multiple effects)
 *
 */
export type SoundsLibrary = Dic<Sound>;
