import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  ngOnInit(): void {
    console.log('init');
    const synth = new Tone.Synth().toMaster();
    //synth.triggerAttack('C4');
    const noise = new Tone.Noise('pink').toMaster();
    noise.start();
    noise.stop(5);
  }

  constructor() {
    if (typeof Tone !== 'undefined') {
      console.log('tone loc');
    }
  }

}
