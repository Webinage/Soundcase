import { AudioWorkletProcessor } from '../../types/missingInTypescript';
export declare class ClippingProcessor extends AudioWorkletProcessor {
    process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: Map<string, Float32Array>): void;
}
