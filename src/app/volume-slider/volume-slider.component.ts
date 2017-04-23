import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'volume-slider',
  templateUrl: './volume-slider.component.html',
  styleUrls: ['./volume-slider.component.scss']
})
export class VolumeSliderComponent implements OnInit {
  min: number = 0;
  max: number = 1;
  value: number = 0.7;
  rotationStyle: string = this.sanitizeRotation(this.value);
  @Output() levelChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
    Howler.volume(this.value);
  }

  onWheelDragging(e) {
    if (e.preventDefault)
      e.preventDefault()
    let newValue: number = Number.parseFloat((this.value + e.wheelDelta / 5000).toFixed(2));
    if (newValue < this.min) {
      this.value = this.min;
    } else if (newValue > this.max) {
      this.value = this.max;
    } else {
      this.value = newValue;
    }
    this.rotationStyle = this.sanitizeRotation(this.value);
    this.levelChange.emit(this.value);
    Howler.volume(this.value);
  }

  sanitizeRotation(val) {
    return `rotate(${Math.round(val * 270) - 90}deg)`;
  }
}
