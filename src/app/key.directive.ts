import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[key]'
})
export class KeyDirective {

  constructor(private el: ElementRef) { }
  @Input() keyboardCode: number;
  @Input() soundSource: string;

  @HostListener('mousedown') onMouseDown() {
    this.play();
  }
  @HostListener('mouseup') onMouseUp() {
    this.stop();
  }
  @HostListener('document:keydown', ['$event']) onKeyDown(event) {
    if (event.keyCode == this.keyboardCode) {
      this.play();
    }

  }
  @HostListener('document:keyup', ['$event']) onKeyUp(event) {
    if (event.keyCode == this.keyboardCode) {
      this.stop();
    }
  }
  private play() {
    console.log('play')
  }
  private stop() {
    console.log('stop');

  }

}
