import { makeDistortionCurve } from '../../utils';
import { Effect } from './Effect.class.abstract';

// Check WaveShaperOptions
export interface DistortionOptions {
  curve?: Float32Array | number[];
  oversample?: OverSampleType;
}

export class Distortion extends Effect<DistortionOptions> {
  private _input: ChannelMergerNode;
  private _gain: GainNode;

  private _node: WaveShaperNode;

  constructor(_context: AudioContext, options: DistortionOptions = {}) {
    super('Distortion', _context, options);
    this._input = new ChannelMergerNode(this._context);
    this._gain = new GainNode(this._context);

    this._node = new WaveShaperNode(this._context, options);

    this._input.connect(this._node).connect(this._gain);
  }

  get input() {
    return this._input;
  }

  get output() {
    return this._gain;
  }

  setCurve(amount: number): void;
  setCurve(curve: number[]): void;
  setCurve(curve: Float32Array): void;
  setCurve(input: any): void {
    if (typeof input === 'number') {
      this._node.curve = makeDistortionCurve(input);
    } else {
      this._node.curve = input;
    }
  }

  setOversample(oversample: OverSampleType): void {
    this._node.oversample = oversample;
  }

  setGain(value: number): void {
    this._gain.gain.value = value;
  }
}
