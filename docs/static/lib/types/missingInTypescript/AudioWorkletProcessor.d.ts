export interface AudioWorkletProcessor {
    readonly port?: MessagePort;
    process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: Map<string, Float32Array>): void;
}
