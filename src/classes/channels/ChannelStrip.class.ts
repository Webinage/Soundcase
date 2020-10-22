import { EffectType } from '../../types';
import { Channel } from './Channel.abstract.class';

export class ChannelStrip implements Channel {
  input: ChannelMergerNode;
  output: GainNode;
  private _effects: EffectType[] = [];

  constructor(_context: AudioContext, effect: EffectType);
  constructor(_context: AudioContext, effects: EffectType[]);
  constructor(private _context: AudioContext, fx: any) {
    this.input = new ChannelMergerNode(this._context);
    this.output = new GainNode(this._context);

    if (Array.isArray(fx)) {
      this.addEffects(fx);
    } else {
      this.addEffect(fx);
    }
  }

  connect(channel: Channel): AudioNode {
    // this.output.disconnect()
    this.output.connect(channel.input);
    return channel.output;
  }

  addEffect(effect: EffectType) {
    this._effects.push(effect);
    this.rootEffects();
  }

  addEffects(effects: EffectType[]) {
    this._effects = [...this._effects, ...effects];
    this.rootEffects();
  }

  rootEffects() {
    this.input.disconnect();
    this._effects.forEach(ef => {
      ef.output.disconnect();
    });
    this.input.connect(this._effects[0].input);
    if (this._effects.length > 1) {
      for (let i = 0; i < this._effects.length - 1; i++) {
        this._effects[i].output.connect(this._effects[i + 1].input);
      }
    }

    this._effects[this._effects.length - 1].output.connect(this.output);

    // const channelFlow = this._effects.reduce((prev_node, ef) => prev_node.connect(ef.input), this.input)
    // channelFlow.connect(this.gain)
  }

  setGain(value: number) {
    this.output.gain.value = value;
  }
}
