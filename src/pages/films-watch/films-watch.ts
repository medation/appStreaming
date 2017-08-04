import { Component } from '@angular/core';

import { Utility } from '../../providers/utility';

import { App } from 'ionic-angular';

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

  constructor(public app: App, public utility: Utility, private domSanitizer: DomSanitizer, public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.lecteur = navParams.data;
    this.videoUrlVf = this.domSanitizer.bypassSecurityTrustResourceUrl(this.lecteur.lienVf);
    this.videoUrlVostfr = this.domSanitizer.bypassSecurityTrustResourceUrl(this.lecteur.lienVostfr)
  }

  ionViewDidLoad() {
    this.app.setTitle('Films');    
    this.updateHangout();
  }

  updateHangout() {
    //Show loading
    var loading = this.utility.getLoader();
    loading.present();
    setTimeout(function(){
        loading.dismiss();
      },1000);
    
  }

  
}




















