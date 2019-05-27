import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private noise = new Tone.Noise('pink').toMaster();

  constructor() {
    if (typeof Tone !== 'undefined') {
      console.log('tone loc');
    }
  }

  ngOnInit(): void {

  }

  start(): void {
    this.noise.start();
  }

  stop(): void {
    this.noise.stop();
  }

  changeNoiseColor($event) {
    console.log($event);
    this.noise.type = $event.detail.value;
  }

}
