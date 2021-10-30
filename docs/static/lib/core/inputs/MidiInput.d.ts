import { EventInput } from '../../types/abstractClasses/EventInput.abstract';
import { InputMessage } from '../../types/interfaces';
export declare class MidiInput extends EventInput<InputMessage> {
    private _midiAccess;
    constructor();
    private _init;
}
