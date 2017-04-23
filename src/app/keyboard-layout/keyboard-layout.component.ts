import { Component, OnInit } from '@angular/core';

interface NoteDescription {
  note: string,
  src: string,
  code: number,
  type: string,
  pressed: boolean, rate: number
};

@Component({
  selector: 'keyboard-layout',
  templateUrl: './keyboard-layout.component.html',
  styleUrls: ['./keyboard-layout.component.scss']
})
export class KeyboardLayoutComponent implements OnInit {
  pianoMapping: NoteDescription[] = [
    { note: "C2", src: "assets/sounds/C2v11.mp3", code: 65, type: "white", pressed: false, rate: 1 },
    { note: "C#2", src: "assets/sounds/C2v11.mp3", code: 87, type: "black", pressed: false, rate: 1.052 },
    { note: "D2", src: "assets/sounds/C2v11.mp3", code: 83, type: "white", pressed: false, rate: 1.12 },
    { note: "D#2", src: "assets/sounds/Dsharp2v11.mp3", code: 69, type: "black", pressed: false, rate: 1 },
    { note: "E2", src: "assets/sounds/Dsharp2v11.mp3", code: 68, type: "white", pressed: false, rate: 1.052 },
    { note: "F2", src: "assets/sounds/Dsharp2v11.mp3", code: 70, type: "white", pressed: false, rate: 1.115 },
    { note: "F#2", src: "assets/sounds/Fsharp2v11.mp3", code: 84, type: "black", pressed: false, rate: 1 },
    { note: "G2", src: "assets/sounds/Fsharp2v11.mp3", code: 71, type: "white", pressed: false, rate: 1.052 },
    { note: "G#2", src: "assets/sounds/Fsharp2v11.mp3", code: 89, type: "black", pressed: false, rate: 1.115 },
    { note: "A2", src: "assets/sounds/Fsharp2v11.mp3", code: 72, type: "white", pressed: false, rate: 1.185 },
    { note: "A#2", src: "assets/sounds/Fsharp2v11.mp3", code: 85, type: "black", pressed: false, rate: 1.253 },
    { note: "B2", src: "assets/sounds/Fsharp2v11.mp3", code: 74, type: "white", pressed: false, rate: 1.329 },
    { note: "C3", src: "assets/sounds/C3v11.mp3", code: 75, type: "white", pressed: false, rate: 1 },
    { note: "C#3", src: "assets/sounds/C3v11.mp3", code: 79, type: "black", pressed: false, rate: 1.052 },
    { note: "D3", src: "assets/sounds/C3v11.mp3", code: 76, type: "white", pressed: false, rate: 1.12 },
    { note: "D#3", src: "assets/sounds/Dsharp3v11.mp3", code: 80, type: "black", pressed: false, rate: 1 },
    { note: "E3", src: "assets/sounds/Dsharp3v11.mp3", code: 59, type: "white", pressed: false, rate: 1.052 },
    { note: "F3", src: "assets/sounds/Dsharp3v11.mp3", code: 222, type: "white", pressed: false, rate: 1.115 },
    { note: "F#3", src: "assets/sounds/Fsharp3v11.mp3", code: 221, type: "black", pressed: false, rate: 1 },
    { note: "G3", src: "assets/sounds/Fsharp3v11.mp3", code: null, type: "white", pressed: false, rate: 1.052 },
    { note: "G#3", src: "assets/sounds/Fsharp3v11.mp3", code: null, type: "black", pressed: false, rate: 1.115 },
    { note: "A3", src: "assets/sounds/Fsharp3v11.mp3", code: null, type: "white", pressed: false, rate: 1.185 },
    { note: "A#3", src: "assets/sounds/Fsharp3v11.mp3", code: null, type: "black", pressed: false, rate: 1.253 },
    { note: "B3", src: "assets/sounds/Fsharp3v11.mp3", code: null, type: "white", pressed: false, rate: 1.329 },
    { note: "C4", src: "assets/sounds/Fsharp3v11.mp3", code: null, type: "white", pressed: false, rate: 1.415 }
  ];

  celloMapping: NoteDescription[] = [
    { note: "C2", src: "assets/sounds/cello/spic_C1_v2_RR1.mp3", code: 65, type: "white", pressed: false, rate: 1 },
    { note: "C#2", src: "assets/sounds/cello/spic_C1_v2_RR1.mp3", code: 87, type: "black", pressed: false, rate: 1.052 },
    { note: "D2", src: "assets/sounds/cello/spic_C1_v2_RR1.mp3", code: 83, type: "white", pressed: false, rate: 1.12 },
    { note: "D#2", src: "assets/sounds/cello/spic_C1_v2_RR1.mp3", code: 69, type: "black", pressed: false, rate: 1.18 },
    { note: "E2", src: "assets/sounds/cello/spic_E1_v2_RR1.mp3", code: 68, type: "white", pressed: false, rate: 1 },
    { note: "F2", src: "assets/sounds/cello/spic_E1_v2_RR1.mp3", code: 70, type: "white", pressed: false, rate: 1.06 },
    { note: "F#2", src: "assets/sounds/cello/spic_E1_v2_RR1.mp3", code: 84, type: "black", pressed: false, rate: 1.12 },
    { note: "G2", src: "assets/sounds/cello/spic_G1_v2_RR1.mp3", code: 71, type: "white", pressed: false, rate: 1 },
    { note: "G#2", src: "assets/sounds/cello/spic_G1_v2_RR1.mp3", code: 89, type: "black", pressed: false, rate: 1.06 },
    { note: "A2", src: "assets/sounds/cello/spic_G1_v2_RR1.mp3", code: 72, type: "white", pressed: false, rate: 1.12 },
    { note: "A#2", src: "assets/sounds/cello/spic_G1_v2_RR1.mp3", code: 85, type: "black", pressed: false, rate: 1.19 },
    { note: "B2", src: "assets/sounds/cello/spic_B1_v2_RR1.mp3", code: 74, type: "white", pressed: false, rate: 1 },
    { note: "C3", src: "assets/sounds/cello/spic_B1_v2_RR1.mp3", code: 75, type: "white", pressed: false, rate: 1.052 },
    { note: "C#3", src: "assets/sounds/cello/spic_B1_v2_RR1.mp3", code: 79, type: "black", pressed: false, rate: 1.11 },
    { note: "D3", src: "assets/sounds/cello/spic_D2_v2_RR1.mp3", code: 76, type: "white", pressed: false, rate: 1 },
    { note: "D#3", src: "assets/sounds/cello/spic_D2_v2_RR1.mp3", code: 80, type: "black", pressed: false, rate: 1.052 },
    { note: "E3", src: "assets/sounds/cello/spic_D2_v2_RR1.mp3", code: 59, type: "white", pressed: false, rate: 1.12 },
    { note: "F3", src: "assets/sounds/cello/spic_F2_v2_RR1.mp3", code: 222, type: "white", pressed: false, rate: 1 },
    { note: "F#3", src: "assets/sounds/cello/spic_F2_v2_RR1.mp3", code: 221, type: "black", pressed: false, rate: 1.054 },
    { note: "G3", src: "assets/sounds/cello/spic_F2_v2_RR1.mp3", code: null, type: "white", pressed: false, rate: 1.115 },
    { note: "G#3", src: "assets/sounds/cello/spic_F2_v2_RR1.mp3", code: null, type: "black", pressed: false, rate: 1.185 },
    { note: "A3", src: "assets/sounds/cello/spic_A2_v2_RR1.mp3", code: null, type: "white", pressed: false, rate: 1 },
    { note: "A#3", src: "assets/sounds/cello/spic_A2_v2_RR1.mp3", code: null, type: "black", pressed: false, rate: 1.054 },
    { note: "B3", src: "assets/sounds/cello/spic_A2_v2_RR1.mp3", code: null, type: "white", pressed: false, rate: 1.116 },
    { note: "C4", src: "assets/sounds/cello/spic_A2_v2_RR1.mp3", code: null, type: "white", pressed: false, rate: 1.185 }
  ];
  instruments: NoteDescription[][] = [this.pianoMapping, this.celloMapping]
  instrumentNum: number = 0;
  selectedInstrument: NoteDescription[];
  constructor() { }

  ngOnInit() {
    this.selectedInstrument = this.instruments[this.instrumentNum];
  }
  public onInstrumentChange(num) {
    this.instrumentNum = num;
    this.selectedInstrument = this.instruments[this.instrumentNum];
  }
}
