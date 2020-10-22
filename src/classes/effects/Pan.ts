import { keepNumberBetwwen } from '../../utils';
import { Effect } from './Effect.class.abstract';

// Check PannerOptions
export interface PanOptions {
  pan?: number;
}

export class Pan extends Effect<PanOptions> {
  private _input: ChannelMergerNode;
  private _gain: GainNode;
  private _node: StereoPannerNode;

  constructor(_context: AudioContext, options: PanOptions = {}) {
    super('Pan', _context, options);

    this._input = new ChannelMergerNode(this._context);
    this._gain = new GainNode(this._context);
    this._node = new StereoPannerNode(this._context, options);

    this._input.connect(this._node).connect(this._gain);
  }

  get input() {
    return this._input;
  }

  get output() {
    return this._gain;
  }

  setPan(value: number) {
    this._node.pan.value = keepNumberBetwwen(value, -1, 1);
  }

  setGain(value: number) {
    this._gain.gain.value = value;
  }
}
