import { Dic } from '../types';
import { InternationalNotes } from './notes.enum';
export declare enum KeyboardType {
    azerty = "azerty",
    qwerty = "qwerty"
}
export declare const KeyboardMap: Dic<InternationalNotes[]>;
export interface Keyboard {
    type: KeyboardType;
    map: string[];
}
export declare const Keyboards: Keyboard[];
