export abstract class Channel {
  input: ChannelMergerNode
  output: GainNode

  constructor() {}

  abstract connect(channel: Channel): AudioNode

  abstract setGain(value: number): void
}
