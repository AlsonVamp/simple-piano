import { Directive, HostListener, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Input() rate: number = 1;
  @Output() pressed = new EventEmitter();
  ngOnInit() {
    this.sound = new Howl({
      src: this.soundSource
    });
    this.sound.rate(this.rate);
  }
  @HostListener('mousedown') onMouseDown() {
    this.play();
  }
  @HostListener('mouseup') onMouseUp() {
    this.stop();
  }
  @HostListener('document:keydown', ['$event']) onKeyDown(event) {
    if (event.keyCode == this.keyboardCode && !this.playing) {
      this.play();
    }

  }
  @HostListener('document:keyup', ['$event']) onKeyUp(event) {
    if (event.keyCode == this.keyboardCode) {
      this.stop();
    }
  }
  private play() {
    if (this.sound.playing)
      this.sound.stop();
    this.playing = true;
    this.sound.play();
    this.pressed.emit(this.playing);
  }
  private stop() {
    this.playing = false;
    this.sound.stop();
    this.pressed.emit(this.playing);
  }

}
