import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private noise = new Tone.Noise('pink').toMaster();
  private volume = new Tone.Volume(0).toMaster();

  constructor() {
    if (typeof Tone !== 'undefined') {
      console.log('tone loc');
    }
  }

  ngOnInit(): void {
    this.noise.chain(this.volume, Tone.Master);
  }

  start(): void {
    this.noise.start();
  }

  stop(): void {
    this.noise.stop();
  }

  changeNoiseColor($event): void {
    console.log($event);
    this.noise.type = $event.detail.value;
  }

  changeVolume($event): void {
    this.setVolume($event.detail.value);
  }

  muteClick(): void {
    this.volume.mute = !this.volume.mute;
  }

  private setVolume(value: number): void {
    this.noise.volume.value = value;
  }

}
