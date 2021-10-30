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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MidiInput = void 0;
var rxjs_1 = require("rxjs");
// import { clamp } from '../../utils';
var EventInput_abstract_1 = require("../../types/abstractClasses/EventInput.abstract");
var MidiInput = /** @class */ (function (_super) {
    __extends(MidiInput, _super);
    // constructor(private cb: (note: number) => void, private cb2: () => void) {
    function MidiInput() {
        var _this = _super.call(this) || this;
        _this._init();
        return _this;
    }
    MidiInput.prototype._init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, navigator.requestMIDIAccess()];
                    case 1:
                        _a._midiAccess = _b.sent();
                        // on
                        // cmd === NOTE_ON
                        // off
                        // cmd === NOTE_OFF || (cmd === NOTE_ON && velocity === 0)
                        // // Get lists of available MIDI controllers
                        // const inputs = access.inputs.values();
                        // const outputs = access.outputs.values();
                        this._subject$.next(new rxjs_1.Observable(function (observer) {
                            _this._midiAccess.onstatechange = function (e) {
                                // Print information about the (dis)connected MIDI controller
                                console.log(e.port.name, e.port.manufacturer, e.port.state);
                            };
                            Array.from(_this._midiAccess.inputs).forEach(function (input) {
                                input[1].onmidimessage = function (msg) {
                                    // console.log('msg', msg);
                                    // console.log('msg type : ', msg.data[0] >> 4);
                                    // // console.log('143 >> 4 : ', 143 >> 4);
                                    // // console.log('144 >> 4 : ', 144 >> 4);
                                    // // console.log('145 >> 4 : ', 145 >> 4);
                                    // console.log('msg note : ', msg.data[1]);
                                    // console.log('msg velocity : ', msg.data[2]);
                                    var cmd = msg.data[0] >> 4;
                                    // const cmd = msg.data[0];
                                    // TODO : WTF l'enum midinotes ??
                                    // const note = MidiNotes[clamp(msg.data[1], 21, 108)];
                                    var note = 44;
                                    console.log('msg.data[1] : ', msg.data[1]);
                                    var velocity = msg.data[2];
                                    // if (cmd === 143 || (cmd === 144 && velocity === 0)) {
                                    if (cmd === 8 || (cmd === 9 && velocity === 0)) {
                                        observer.next({ type: 'NOTE_OFF', note: note, velocity: velocity });
                                    }
                                    else {
                                        observer.next({ type: 'NOTE_ON', note: note, velocity: velocity });
                                    }
                                };
                            });
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    return MidiInput;
}(EventInput_abstract_1.EventInput));
exports.MidiInput = MidiInput;
//# sourceMappingURL=MidiInput.js.map