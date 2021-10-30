import { Observable } from 'rxjs';
import { EventInput } from '../../types/abstractClasses/EventInput.abstract';
import { KeyboardMap, Keyboards, KeyboardType } from '../../types/enums';
import { clamp } from '../../utils';
export class KeyboardInput extends EventInput {
    constructor() {
        super();
        this.keyboardType = KeyboardType.azerty;
        this._octave = 1;
        this._subject$.next(new Observable(observer => {
            document.addEventListener('keydown', event => {
                if (this._keyboard.map.includes(event.key)) {
                    if (!event.repeat) {
                        observer.next(this.handleKeyEvent('NOTE_ON', event));
                    }
                }
            });
            document.addEventListener('keyup', event => {
                if (this._keyboard.map.includes(event.key)) {
                    observer.next(this.handleKeyEvent('NOTE_OFF', event));
                }
            });
        }));
    }
    handleKeyEvent(type, event) {
        return {
            type,
            note: KeyboardMap[this._keyboard.map.indexOf(event.key)][this._octave]
        };
    }
    set keyboardType(keyboardType) {
        this._keyboard = Keyboards.some(keyboard => keyboard.type === keyboardType)
            ? Keyboards.find(keyboard => keyboard.type === keyboardType)
            : Keyboards[0];
    }
    set octave(value) {
        this._octave = clamp(value, 0, 6);
    }
}
//# sourceMappingURL=KeyboardInput.js.map