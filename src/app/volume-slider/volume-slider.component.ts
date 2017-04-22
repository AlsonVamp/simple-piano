import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'volume-slider',
  templateUrl: './volume-slider.component.html',
  styleUrls: ['./volume-slider.component.scss']
})
export class VolumeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onDrag(event) {
    console.log(event);

  }
}
