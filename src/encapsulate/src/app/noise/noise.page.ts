import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-noise',
  templateUrl: 'noise.page.html',
  styleUrls: ['noise.page.scss']
})
export class NoisePage implements OnInit {

  private noise: Tone.Noise;
  private muted: boolean;
  private mutedVolume: number;
  private muteicon: string;

  constructor() {
    this.noise = new Tone.Noise({
      type : 'pink'
    });
    this.setVolume(-10);
    this.noise.toMaster();
  }

  ngOnInit(): void {
    this.muteicon = 'volume-off';
  }

  start(): void {
    this.noise.start();
  }

  stop(): void {
    this.noise.stop();
  }

  changeNoiseColor($event): void {
    this.noise.type = $event.detail.value;
  }

  changeVolume($event): void {
    this.setVolume($event.detail.value);
  }

  muteClick(): void {
    this.muted = !this.muted;
    if (this.muted) {
      this.mutedVolume =  this.noise.volume.value;
      this.muteicon = 'volume-high';
      this.setVolume(-100);
    } else {
      this.setVolume(this.mutedVolume);
      this.muteicon = 'volume-off';
    }
  }

  private setVolume(value: number): void {
    this.noise.volume.value = value;
  }

}
