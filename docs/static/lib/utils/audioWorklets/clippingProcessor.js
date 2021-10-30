var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { AudioWorkletProcessor } from '../../types/missingInTypescript';
export function clippingSample(audioContext, buffer) {
    return __awaiter(this, void 0, void 0, function* () {
        const buff = buffer;
        // registerProcessor('clipping-processor', ClippingProcessor);
        yield audioContext.audioWorklet.addModule('../../core/audioWorklets/clipping.worklet.js');
        const node = new AudioWorkletNode(audioContext, 'clipping-processor');
        buffer.connect(node);
        // node.connect(audioContext.destination);
    });
}
// declare function registerProcessor(
//   name: string,
//   processorCtor: (new (options?: AudioWorkletNodeOptions) => AudioWorkletProcessor) & {
//     parameterDescriptors?: AudioParamDescriptor[];
//   }
// ): undefined;
//# sourceMappingURL=clippingProcessor.js.map