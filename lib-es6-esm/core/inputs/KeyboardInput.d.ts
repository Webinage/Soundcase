import { EventInput } from '../../types/abstractClasses/EventInput.abstract';
import { Keyboard, KeyboardType } from '../../types/enums';
import { InputMessage } from '../../types/interfaces';
export declare class KeyboardInput extends EventInput<InputMessage> {
    _keyboard: Keyboard;
    _octave: number;
    constructor();
    private handleKeyEvent;
    set keyboardType(keyboardType: KeyboardType);
    set octave(value: number);
}
