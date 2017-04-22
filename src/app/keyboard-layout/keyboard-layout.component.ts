import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keyboard-layout',
  templateUrl: './keyboard-layout.component.html',
  styleUrls: ['./keyboard-layout.component.scss']
})
export class KeyboardLayoutComponent implements OnInit {
  keysMapping: any[] = [
    { note: "C2", src: "assets/sounds/C2v11.mp3", code: 65, type: "white", pressed: false },
    { note: "C#2", src: "assets/sounds/A2v11.mp3", code: 87, type: "black", pressed: false },
    { note: "D2", src: "assets/sounds/A2v11.mp3", code: 83, type: "white", pressed: false },
    { note: "D#2", src: "assets/sounds/A2v11.mp3", code: 69, type: "black", pressed: false },
    { note: "E2", src: "assets/sounds/A2v11.mp3", code: 68, type: "white", pressed: false },
    { note: "F2", src: "assets/sounds/A2v11.mp3", code: 70, type: "white", pressed: false },
    { note: "F#2", src: "assets/sounds/Dsharp2v11.mp3", code: 84, type: "black", pressed: false },
    { note: "G2", src: "assets/sounds/Fsharp2v11.mp3", code: 71, type: "white", pressed: false },
    { note: "G#2", src: "assets/sounds/Fsharp2v11.mp3", code: 89, type: "black", pressed: false },
    { note: "A2", src: "assets/sounds/Fsharp2v11.mp3", code: 72, type: "white", pressed: false },
    { note: "A#2", src: "assets/sounds/Fsharp2v11.mp3", code: 85, type: "black", pressed: false },
    { note: "B2", src: "assets/sounds/Fsharp2v11.mp3", code: 74, type: "white", pressed: false }
  ];

  constructor() { }

  ngOnInit() {
  }
  public onPress(event) {
  }
}
