import { Effect } from './Effect.class.abstract';

// Check BiquadFilterOptions
export interface FilterOptions {
  type?: BiquadFilterType;
  Qu?: number;
  frequency?: number;
  detune?: number;
  gain?: number;
}

export class Filter extends Effect<FilterOptions> {
  private _input: ChannelMergerNode;
  private _gain: GainNode;

  private _node: BiquadFilterNode;

  constructor(_context: AudioContext, options: FilterOptions = {}) {
    super('Filter', _context, options);
    this._input = new ChannelMergerNode(this._context);
    this._gain = new GainNode(this._context);

    this._node = new BiquadFilterNode(this._context, options);

    this._input.connect(this._node).connect(this._gain);
  }

  get input() {
    return this._input;
  }

  get output() {
    return this._gain;
  }

  setFrequency(value: number) {
    this._node.frequency.value = value;
  }

  setQ(value: number) {
    this._node.Q.value = value;
  }

  setFilterGain(value: number) {
    this._node.gain.value = value;
  }

  setGain(value: number) {
    this._gain.gain.value = value;
  }
}
