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
export type SoundsLibrary = Map<string, Sound>;
