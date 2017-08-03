import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-films-watch',
  templateUrl: 'films-watch.html'
})
export class FilmsWatchPage {
  
  lecteur: any;

  constructor(public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.lecteur = navParams.data;
  }

  
}




















