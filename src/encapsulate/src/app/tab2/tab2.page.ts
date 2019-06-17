import { Component, OnInit } from "@angular/core";
import * as Tone from "tone";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})

export class Tab2Page implements OnInit {

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

    this.lfo = new Tone.LFO(.001, 0, 400);
    this.lfo.connect(this.filter.frequency);
    this.lfo.start();

    this.synth.connect(this.filter);
    this.filter.connect(this.distortion);
    this.distortion.toMaster();
  }

  ngOnInit(): void {
    this.synth.triggerAttack("f3", "4n", 15);
  }

}
