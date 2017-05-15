import { Directive, HostListener, ElementRef, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[key]'
})
export class KeyDirective implements OnInit, OnChanges {
  sound: Howl;
  @Input() playing: boolean = false;
  constructor() {

  }
  @Input() volume: number = 1.0;
  @Input() keyboardCode: number;
  @Input() soundSource: string[];
  @Input() rate: number = 1.0;
  @Output() pressed = new EventEmitter();
  ngOnInit() {
    this.sound = new Howl({
      src: this.soundSource,
      volume: this.volume,
      rate: this.rate
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty("playing") && !changes.playing.isFirstChange()) {
      console.log(changes.playing.currentValue);
      changes.playing.currentValue ? this.play() : this.stop();
    }
  }
  @HostListener('mousedown') onMouseDown() {
    this.play();
  }
  @HostListener('mouseup') onMouseUp() {
    this.stop();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.stop();
  }
  @HostListener('mouseover', ['$event']) onMouseOver(event) {
    if (event.buttons === 1)
      this.play();
  }
  @HostListener('dragstart') onDrag() {
    return false;
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
    //this.sound.fade(1.0, 0, 200);
    this.sound.stop();
    this.playing = false;
    this.pressed.emit(this.playing);
  }

}
