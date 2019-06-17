import { Component, OnInit } from "@angular/core";
import * as Tone from "tone";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})

export class Tab2Page implements OnInit {

  public muteicon: string;
  private muted: boolean;

  private synth: Tone.Synth;
  private distortion: Tone.Distortion;
  private filter: Tone.Filter;
  private lfo: Tone.LFO;

  constructor() {
    this.synth = new Tone.Synth({
      oscillator: {
        type: "fatsawtooth"
      }
    });
    this.synth.volume.value = -30;

    this.distortion = new Tone.Distortion({
      distortion: 5,
      oversample: "none"
    });

    this.filter = new Tone.Filter();

    this.lfo = new Tone.LFO(.05, 100, 1000);
    this.lfo.start();

    this.lfo.connect(this.filter.frequency);
    this.synth.connect(this.filter);
    this.filter.connect(this.distortion);

    this.distortion.toMaster();
  }

  ngOnInit(): void {
    this.synth.triggerAttack("f2", "4n", 15);
    this.muteicon = "volume-off";
  }

  muteClick(): void {
    this.muted = !this.muted;
    if (this.muted) {
      Tone.Master.mute = true;
      this.muteicon = "volume-high";
    } else {
      Tone.Master.mute = false;
      this.muteicon = "volume-off";
    }
  }

}
