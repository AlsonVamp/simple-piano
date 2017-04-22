import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[key]'
})
export class KeyDirective implements OnInit {
  sound: Howl;
  playing: boolean = false;
  constructor(private el: ElementRef) {

  }
  @Input() keyboardCode: number;
  @Input() soundSource: string[];
  ngOnInit() {
    this.sound = new Howl({
      src: this.soundSource
    });
  }
  @HostListener('mousedown') onMouseDown() {
    this.play();
  }
  @HostListener('mouseup') onMouseUp() {
    this.stop();
  }
  @HostListener('document:keydown', ['$event']) onKeyDown(event) {
    if (event.keyCode == this.keyboardCode && !this.playing) {
      this.playing = true;
      this.play();
    }

  }
  @HostListener('document:keyup', ['$event']) onKeyUp(event) {
    if (event.keyCode == this.keyboardCode) {
      this.playing = false;
      this.stop();
    }
  }
  private play() {
    if (this.sound.playing)
      this.sound.stop();
    this.sound.play();

    console.log('play')
  }
  private stop() {
    this.sound.stop();
    console.log('stop');

  }

}
