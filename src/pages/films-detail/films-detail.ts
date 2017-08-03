import { Component } from '@angular/core';

import {ActionSheet, ActionSheetController, AlertController, App, ModalController, NavController } from 'ionic-angular';

// import moment from 'moment';
import { NavParams } from 'ionic-angular';
import { FilmsData } from '../../providers/films-data';
import { Utility } from '../../providers/utility';
import { FilmsWatchPage } from '../films-watch/films-watch';

@Component({
  selector: 'page-films-detail',
  templateUrl: 'films-detail.html'
})
export class FilmsDetailPage {
  film : any;
  films = [];
  address;
  actionSheet: ActionSheet;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public filmsData: FilmsData,
    public utility: Utility,
    public actionSheetCtrl: ActionSheetController
  ) {

    this.film = navParams.data; 
    
  }

  ionViewDidLoad() {
    this.app.setTitle('Films');    
    this.updateHangout();
  }

  updateHangout() {
    //Show loading
    var loading = this.utility.getLoader();
    loading.present();

    this.filmsData.getFilms().subscribe(data => {
      
      this.films = data;

      //Hide loading
      setTimeout(function(){
        loading.dismiss();
      },1000);

    });
  }


  goToWatch(film) {
    let nav = this.app.getRootNav();
    nav.push(FilmsWatchPage, film);
  } 

}






