import { Dic } from '../types';
import { InternationalNotes } from './notes.enum';

export enum KeyboardType {
  azerty = 'azerty',
  qwerty = 'qwerty'
}

export const KeyboardMap: Dic<InternationalNotes[]> = {
  '0': [
    InternationalNotes['C1'],
    InternationalNotes['C2'],
    InternationalNotes['C3'],
    InternationalNotes['C4'],
    InternationalNotes['C5'],
    InternationalNotes['C6'],
    InternationalNotes['C7']
  ],
  '1': [
    InternationalNotes['C#1'],
    InternationalNotes['C#2'],
    InternationalNotes['C#3'],
    InternationalNotes['C#4'],
    InternationalNotes['C#5'],
    InternationalNotes['C#6'],
    InternationalNotes['C#7']
  ],
  '2': [
    InternationalNotes['D1'],
    InternationalNotes['D2'],
    InternationalNotes['D3'],
    InternationalNotes['D4'],
    InternationalNotes['D5'],
    InternationalNotes['D6'],
    InternationalNotes['D7']
  ],
  '3': [
    InternationalNotes['D#1'],
    InternationalNotes['D#2'],
    InternationalNotes['D#3'],
    InternationalNotes['D#4'],
    InternationalNotes['D#5'],
    InternationalNotes['D#6'],
    InternationalNotes['D#7']
  ],
  '4': [
    InternationalNotes['E1'],
    InternationalNotes['E2'],
    InternationalNotes['E3'],
    InternationalNotes['E4'],
    InternationalNotes['E5'],
    InternationalNotes['E6'],
    InternationalNotes['E7']
  ],
  '5': [
    InternationalNotes['F1'],
    InternationalNotes['F2'],
    InternationalNotes['F3'],
    InternationalNotes['F4'],
    InternationalNotes['F5'],
    InternationalNotes['F6'],
    InternationalNotes['F7']
  ],
  '6': [
    InternationalNotes['F#1'],
    InternationalNotes['F#2'],
    InternationalNotes['F#3'],
    InternationalNotes['F#4'],
    InternationalNotes['F#5'],
    InternationalNotes['F#6'],
    InternationalNotes['F#7']
  ],
  '7': [
    InternationalNotes['G1'],
    InternationalNotes['G2'],
    InternationalNotes['G3'],
    InternationalNotes['G4'],
    InternationalNotes['G5'],
    InternationalNotes['G6'],
    InternationalNotes['G7']
  ],
  '8': [
    InternationalNotes['G#1'],
    InternationalNotes['G#2'],
    InternationalNotes['G#3'],
    InternationalNotes['G#4'],
    InternationalNotes['G#5'],
    InternationalNotes['G#6'],
    InternationalNotes['G#7']
  ],
  '9': [
    InternationalNotes['A1'],
    InternationalNotes['A2'],
    InternationalNotes['A3'],
    InternationalNotes['A4'],
    InternationalNotes['A5'],
    InternationalNotes['A6'],
    InternationalNotes['A7']
  ],
  '10': [
    InternationalNotes['A#1'],
    InternationalNotes['A#2'],
    InternationalNotes['A#3'],
    InternationalNotes['A#4'],
    InternationalNotes['A#5'],
    InternationalNotes['A#6'],
    InternationalNotes['A#7']
  ],
  '11': [
    InternationalNotes['B1'],
    InternationalNotes['B2'],
    InternationalNotes['B3'],
    InternationalNotes['B4'],
    InternationalNotes['B5'],
    InternationalNotes['B6'],
    InternationalNotes['B7']
  ]
};

export interface Keyboard {
  type: KeyboardType;
  map: string[];
}

export const Keyboards: Keyboard[] = [
  {
    type: KeyboardType.qwerty,
    map: ['q', 'z', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j']
  },
  {
    type: KeyboardType.azerty,
    map: ['q', 'z', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j']
  }
];
