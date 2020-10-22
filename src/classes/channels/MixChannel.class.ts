import { Channel } from './Channel.abstract.class';

export class MixChannel implements Channel {
  input: ChannelMergerNode;
  output: GainNode;

  constructor(private _context: AudioContext) {
    this.input = new ChannelMergerNode(this._context);
    this.output = new GainNode(this._context);
    this.input.connect(this.output);
  }

  connect(channel: Channel): AudioNode {
    // this.output.disconnect()
    this.output.connect(channel.input);
    return channel.output;
  }

  setGain(value: number) {
    this.output.gain.value = value;
  }
}
