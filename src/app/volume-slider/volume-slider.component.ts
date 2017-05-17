import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'volume-slider',
  templateUrl: './volume-slider.component.html',
  styleUrls: ['./volume-slider.component.scss']
})
export class VolumeSliderComponent implements OnInit {
  min: number = 0;
  max: number = 1;
  isMouseDown: boolean = false;
  @Input() value: number = 0.7;
  initialMousePosition: number;
  mouseWheelScaling: number = 50;
  mouseMoveScaling: number = 2000;
  rotationStyle: string = this.sanitizeRotation(this.value);
  @Output() levelChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.levelChange.emit(this.value);
  }

  onMouseUp(e) {
    this.isMouseDown = false;
  }
  onMouseDown(e) {
    this.isMouseDown = true;
  }
  onMouseMove(e) {
    if (this.isMouseDown) {
      if (this.initialMousePosition) {
        let diff = e.clientX - this.initialMousePosition;
        this._setNewValue(this.value + diff / this.mouseMoveScaling);
      }
      else {
        this.initialMousePosition = e.clientX;
      }
    }

  }
  _setNewValue(newValue) {
    if (newValue < this.min) {
      this.value = this.min;
    } else if (newValue > this.max) {
      this.value = this.max;
    } else {
      this.value = newValue;
    }
    this.rotationStyle = this.sanitizeRotation(this.value);
    this.levelChange.emit(this.value);
  }
  onWheelDragging(e) {
    if (e.preventDefault)
      e.preventDefault();
    let direction = (e.deltaY < 0) ? 1 : -1;
    let newValue: number = Number.parseFloat((this.value + direction / this.mouseWheelScaling).toFixed(2));
    this._setNewValue(newValue);
  }

  sanitizeRotation(val) {
    return `rotate(${Math.round(val * 270) - 90}deg)`;
  }
}
