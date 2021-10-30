"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardInput = void 0;
var rxjs_1 = require("rxjs");
var EventInput_abstract_1 = require("../../types/abstractClasses/EventInput.abstract");
var enums_1 = require("../../types/enums");
var utils_1 = require("../../utils");
var KeyboardInput = /** @class */ (function (_super) {
    __extends(KeyboardInput, _super);
    function KeyboardInput() {
        var _this = _super.call(this) || this;
        _this.keyboardType = enums_1.KeyboardType.azerty;
        _this._octave = 1;
        _this._subject$.next(new rxjs_1.Observable(function (observer) {
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
            note: enums_1.KeyboardMap[this._keyboard.map.indexOf(event.key)][this._octave]
        };
    };
    Object.defineProperty(KeyboardInput.prototype, "keyboardType", {
        set: function (keyboardType) {
            this._keyboard = enums_1.Keyboards.some(function (keyboard) { return keyboard.type === keyboardType; })
                ? enums_1.Keyboards.find(function (keyboard) { return keyboard.type === keyboardType; })
                : enums_1.Keyboards[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyboardInput.prototype, "octave", {
        set: function (value) {
            this._octave = utils_1.clamp(value, 0, 6);
        },
        enumerable: false,
        configurable: true
    });
    return KeyboardInput;
}(EventInput_abstract_1.EventInput));
exports.KeyboardInput = KeyboardInput;
//# sourceMappingURL=KeyboardInput.js.map