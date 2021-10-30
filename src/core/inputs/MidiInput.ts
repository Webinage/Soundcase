import { Observable } from 'rxjs';
// import { clamp } from '../../utils';
import { EventInput } from '../../types/abstractClasses/EventInput.abstract';
// import { MidiNotes } from '../../types/enums';
import { InputMessage } from '../../types/interfaces';

export class MidiInput extends EventInput<InputMessage> {
  private _midiAccess: WebMidi.MIDIAccess;

  // constructor(private cb: (note: number) => void, private cb2: () => void) {
  constructor() {
    super();
    this._init();
  }

  private async _init() {
    this._midiAccess = await navigator.requestMIDIAccess();

    // on
    // cmd === NOTE_ON
    // off
    // cmd === NOTE_OFF || (cmd === NOTE_ON && velocity === 0)

    // // Get lists of available MIDI controllers
    // const inputs = access.inputs.values();
    // const outputs = access.outputs.values();

    this._subject$.next(
      new Observable(observer => {
        this._midiAccess.onstatechange = e => {
          // Print information about the (dis)connected MIDI controller
          console.log(e.port.name, e.port.manufacturer, e.port.state);
        };

        Array.from(this._midiAccess.inputs).forEach(input => {
          input[1].onmidimessage = msg => {
            // console.log('msg', msg);
            // console.log('msg type : ', msg.data[0] >> 4);
            // // console.log('143 >> 4 : ', 143 >> 4);
            // // console.log('144 >> 4 : ', 144 >> 4);
            // // console.log('145 >> 4 : ', 145 >> 4);
            // console.log('msg note : ', msg.data[1]);
            // console.log('msg velocity : ', msg.data[2]);

            const cmd = msg.data[0] >> 4;
            // const cmd = msg.data[0];
            // TODO : WTF l'enum midinotes ??
            // const note = MidiNotes[clamp(msg.data[1], 21, 108)];
            const note = 44;
            console.log('msg.data[1] : ', msg.data[1]);
            const velocity = msg.data[2];

            // if (cmd === 143 || (cmd === 144 && velocity === 0)) {
            if (cmd === 8 || (cmd === 9 && velocity === 0)) {
              observer.next({ type: 'NOTE_OFF', note, velocity });
            } else {
              observer.next({ type: 'NOTE_ON', note, velocity });
            }
          };
        });
      })
    );
  }
}
