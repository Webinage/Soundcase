"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboards = exports.KeyboardMap = exports.KeyboardType = void 0;
var notes_enum_1 = require("./notes.enum");
var KeyboardType;
(function (KeyboardType) {
    KeyboardType["azerty"] = "azerty";
    KeyboardType["qwerty"] = "qwerty";
})(KeyboardType = exports.KeyboardType || (exports.KeyboardType = {}));
exports.KeyboardMap = {
    '0': [
        notes_enum_1.InternationalNotes['C1'],
        notes_enum_1.InternationalNotes['C2'],
        notes_enum_1.InternationalNotes['C3'],
        notes_enum_1.InternationalNotes['C4'],
        notes_enum_1.InternationalNotes['C5'],
        notes_enum_1.InternationalNotes['C6'],
        notes_enum_1.InternationalNotes['C7']
    ],
    '1': [
        notes_enum_1.InternationalNotes['C#1'],
        notes_enum_1.InternationalNotes['C#2'],
        notes_enum_1.InternationalNotes['C#3'],
        notes_enum_1.InternationalNotes['C#4'],
        notes_enum_1.InternationalNotes['C#5'],
        notes_enum_1.InternationalNotes['C#6'],
        notes_enum_1.InternationalNotes['C#7']
    ],
    '2': [
        notes_enum_1.InternationalNotes['D1'],
        notes_enum_1.InternationalNotes['D2'],
        notes_enum_1.InternationalNotes['D3'],
        notes_enum_1.InternationalNotes['D4'],
        notes_enum_1.InternationalNotes['D5'],
        notes_enum_1.InternationalNotes['D6'],
        notes_enum_1.InternationalNotes['D7']
    ],
    '3': [
        notes_enum_1.InternationalNotes['D#1'],
        notes_enum_1.InternationalNotes['D#2'],
        notes_enum_1.InternationalNotes['D#3'],
        notes_enum_1.InternationalNotes['D#4'],
        notes_enum_1.InternationalNotes['D#5'],
        notes_enum_1.InternationalNotes['D#6'],
        notes_enum_1.InternationalNotes['D#7']
    ],
    '4': [
        notes_enum_1.InternationalNotes['E1'],
        notes_enum_1.InternationalNotes['E2'],
        notes_enum_1.InternationalNotes['E3'],
        notes_enum_1.InternationalNotes['E4'],
        notes_enum_1.InternationalNotes['E5'],
        notes_enum_1.InternationalNotes['E6'],
        notes_enum_1.InternationalNotes['E7']
    ],
    '5': [
        notes_enum_1.InternationalNotes['F1'],
        notes_enum_1.InternationalNotes['F2'],
        notes_enum_1.InternationalNotes['F3'],
        notes_enum_1.InternationalNotes['F4'],
        notes_enum_1.InternationalNotes['F5'],
        notes_enum_1.InternationalNotes['F6'],
        notes_enum_1.InternationalNotes['F7']
    ],
    '6': [
        notes_enum_1.InternationalNotes['F#1'],
        notes_enum_1.InternationalNotes['F#2'],
        notes_enum_1.InternationalNotes['F#3'],
        notes_enum_1.InternationalNotes['F#4'],
        notes_enum_1.InternationalNotes['F#5'],
        notes_enum_1.InternationalNotes['F#6'],
        notes_enum_1.InternationalNotes['F#7']
    ],
    '7': [
        notes_enum_1.InternationalNotes['G1'],
        notes_enum_1.InternationalNotes['G2'],
        notes_enum_1.InternationalNotes['G3'],
        notes_enum_1.InternationalNotes['G4'],
        notes_enum_1.InternationalNotes['G5'],
        notes_enum_1.InternationalNotes['G6'],
        notes_enum_1.InternationalNotes['G7']
    ],
    '8': [
        notes_enum_1.InternationalNotes['G#1'],
        notes_enum_1.InternationalNotes['G#2'],
        notes_enum_1.InternationalNotes['G#3'],
        notes_enum_1.InternationalNotes['G#4'],
        notes_enum_1.InternationalNotes['G#5'],
        notes_enum_1.InternationalNotes['G#6'],
        notes_enum_1.InternationalNotes['G#7']
    ],
    '9': [
        notes_enum_1.InternationalNotes['A1'],
        notes_enum_1.InternationalNotes['A2'],
        notes_enum_1.InternationalNotes['A3'],
        notes_enum_1.InternationalNotes['A4'],
        notes_enum_1.InternationalNotes['A5'],
        notes_enum_1.InternationalNotes['A6'],
        notes_enum_1.InternationalNotes['A7']
    ],
    '10': [
        notes_enum_1.InternationalNotes['A#1'],
        notes_enum_1.InternationalNotes['A#2'],
        notes_enum_1.InternationalNotes['A#3'],
        notes_enum_1.InternationalNotes['A#4'],
        notes_enum_1.InternationalNotes['A#5'],
        notes_enum_1.InternationalNotes['A#6'],
        notes_enum_1.InternationalNotes['A#7']
    ],
    '11': [
        notes_enum_1.InternationalNotes['B1'],
        notes_enum_1.InternationalNotes['B2'],
        notes_enum_1.InternationalNotes['B3'],
        notes_enum_1.InternationalNotes['B4'],
        notes_enum_1.InternationalNotes['B5'],
        notes_enum_1.InternationalNotes['B6'],
        notes_enum_1.InternationalNotes['B7']
    ]
};
exports.Keyboards = [
    {
        type: KeyboardType.qwerty,
        map: ['q', 'z', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j']
    },
    {
        type: KeyboardType.azerty,
        map: ['q', 'z', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j']
    }
];
//# sourceMappingURL=keyboardType.enum.js.map