import { AudioWorkletProcessor } from '.';
export declare function registerProcessor(name: string, processorCtor: (new (options?: AudioWorkletNodeOptions) => AudioWorkletProcessor) & {
    parameterDescriptors?: AudioParamDescriptor[];
}): undefined;
