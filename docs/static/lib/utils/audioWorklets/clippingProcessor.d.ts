import { Channel, Effect } from '../../types/abstractClasses';
import { EffectOptions } from '../../types/interfaces';
export declare function clippingSample(audioContext: AudioContext, buffer: AudioNode | Effect<EffectOptions> | Channel): Promise<void>;
