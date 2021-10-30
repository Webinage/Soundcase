var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Observable } from 'rxjs';
import { EventInput } from '../../types/abstractClasses/EventInput.abstract';
import { KeyboardMap, Keyboards, KeyboardType } from '../../types/enums';
import { clamp } from '../../utils';
var KeyboardInput = /** @class */ (function (_super) {
    __extends(KeyboardInput, _super);
    function KeyboardInput() {
        var _this = _super.call(this) || this;
        _this.keyboardType = KeyboardType.azerty;
        _this._octave = 1;
        _this._subject$.next(new Observable(function (observer) {
            document.addEventListener('keydown', function (event) {
                if (_this._keyboard.map.includes(event.key)) {
                    if (!event.repeat) {
                        observer.next(_this.handleKeyEvent('NOTE_ON', event));
                    }
                }
            });
            document.addEventListener('keyup', function (event) {
                if (_this._keyboard.map.includes(event.key)) {
                    observer.next(_this.handleKeyEvent('NOTE_OFF', event));
                }
            });
        }));
        return _this;
    }
    KeyboardInput.prototype.handleKeyEvent = function (type, event) {
        return {
            type: type,
            note: KeyboardMap[this._keyboard.map.indexOf(event.key)][this._octave]
        };
    };
    Object.defineProperty(KeyboardInput.prototype, "keyboardType", {
        set: function (keyboardType) {
            this._keyboard = Keyboards.some(function (keyboard) { return keyboard.type === keyboardType; })
                ? Keyboards.find(function (keyboard) { return keyboard.type === keyboardType; })
                : Keyboards[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardInput.prototype, "octave", {
        set: function (value) {
            this._octave = clamp(value, 0, 6);
        },
        enumerable: false,
        configurable: true
    });
    return KeyboardInput;
}(EventInput));
export { KeyboardInput };
//# sourceMappingURL=KeyboardInput.js.map