import { EffectTypeName } from '../../types';
import { makeDistortionCurve } from '../../utils';

export class Effect<OT> {
  protected options: OT;
  constructor(
    protected name: EffectTypeName,
    protected _context: AudioContext,
    options: OT
  ) {
    if (name === '_3BandEQ') {
      this.options = {
        ...{ breakPoints: { lowMid: 200, midHigh: 2000 }, Q: 1, detune: 0 },
        ...options
      };
    } else if (name === 'Delay') {
      this.options = { ...{ delayTime: 0.5 }, ...options };
    } else if (name === 'Distortion') {
      this.options = {
        ...{ curve: makeDistortionCurve(), oversample: '2x' },
        ...options
      };
    } else if (name === 'Filter') {
      this.options = {
        ...{ type: 'lowpass', frequency: 500, Q: 1, detune: 0, gain: 1 },
        ...options
      };
    } else if (name === 'Pan') {
      this.options = { ...{ pan: 0 }, ...options };
    } else if (name === 'Reverb') {
      this.options = { ...{}, ...options };
    }
  }

  // get options() {
  //   return {};
  // }
}
