import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

import {SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'page-films-watch',
  templateUrl: 'films-watch.html'
})
export class FilmsWatchPage {
  
  lecteur: any;
  videoUrlVf: SafeResourceUrl;
  videoUrlVostfr: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer, public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.lecteur = navParams.data;
    this.videoUrlVf = this.domSanitizer.bypassSecurityTrustResourceUrl(this.lecteur.lienVf);
    this.videoUrlVostfr = this.domSanitizer.bypassSecurityTrustResourceUrl(this.lecteur.lienVostfr)
  }

  
}




















