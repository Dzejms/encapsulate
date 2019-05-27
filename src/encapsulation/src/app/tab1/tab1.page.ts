import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  ngOnInit(): void {

    const synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease('C4', '8n');
  }

  constructor() {
    if (typeof Tone !== 'undefined') {
      console.log('tone loc');
    }
  }

}
