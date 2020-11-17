import { MidiMessageType } from '../enums';

export interface InputMessage {
  type: MidiMessageType;
  note: number;
  velocity?: number;
}
