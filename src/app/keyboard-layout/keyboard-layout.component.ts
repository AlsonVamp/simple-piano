import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keyboard-layout',
  templateUrl: './keyboard-layout.component.html',
  styleUrls: ['./keyboard-layout.component.css']
})
export class KeyboardLayoutComponent implements OnInit {
  keysMapping = [
    { note: "A2", src: "assets/sounds/A2v11.mp3", code: 65 },
    { note: "C2", src: "assets/sounds/C2v11.mp3", code: 83 },
    { note: "D#", src: "assets/sounds/Dsharp2v11.mp3", code: 68 },
    { note: "F#", src: "assets/sounds/Fsharp2v11.mp3", code: 70 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
