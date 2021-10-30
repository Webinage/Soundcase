// import { ClippingProcessor } from '../../core/audioWorklets';
import { Channel, Effect } from '../../types/abstractClasses';
import { EffectOptions } from '../../types/interfaces';
// import { AudioWorkletProcessor } from '../../types/missingInTypescript';

export async function clippingSample(
  audioContext: AudioContext,
  buffer: AudioNode | Effect<EffectOptions> | Channel
): Promise<void> {
  const buff = buffer;
  // registerProcessor('clipping-processor', ClippingProcessor);

  await audioContext.audioWorklet.addModule('../../core/audioWorklets/clipping.worklet.js');
  const node = new AudioWorkletNode(audioContext, 'clipping-processor');
  buffer.connect(node);
  // node.connect(audioContext.destination);
}

// declare function registerProcessor(
//   name: string,
//   processorCtor: (new (options?: AudioWorkletNodeOptions) => AudioWorkletProcessor) & {
//     parameterDescriptors?: AudioParamDescriptor[];
//   }
// ): undefined;
