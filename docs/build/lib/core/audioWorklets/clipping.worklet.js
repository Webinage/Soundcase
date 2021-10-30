/* export */ class ClippingProcessor {
    process(inputs, outputs, parameters) {
        const params = parameters;
        inputs[0].forEach(buffer => {
            console.log('buffer : ', buffer);
            for (var i = 0; i < buffer.length; i++) {
                const inputFloat32Array = inputs[0][i];
                const inputFloat32ArrayAbs = inputFloat32Array.map(value => Math.abs(value));
                outputs[0][i] = inputFloat32ArrayAbs.map(value => (value >= 1 ? 1 : 0));
                // if (absValue >= 1) {
                //   // break;
                // } else {
                // }
            }
        });
    }
}
registerProcessor('clipping-processor', ClippingProcessor);
export {};
//# sourceMappingURL=clipping.worklet.js.map