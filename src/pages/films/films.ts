import { Component } from '@angular/core';

import {ActionSheet, ActionSheetController, AlertController, App, ModalController, NavController } from 'ionic-angular';
import { NavParams, MenuController } from 'ionic-angular';

// import moment from 'moment';

import { FilmsDetailPage } from '../films-detail/films-detail';

import { FilmsData } from '../../providers/films-data';
import { Utility } from '../../providers/utility';



@Component({
  selector: 'page-films',
  templateUrl: 'films.html'
})
export class FilmsPage {

  categorie = "Dernier films sortis";
  films = [];
  address;
  actionSheet: ActionSheet;

  constructor(
    public alertCtrl: AlertController,
    public menu: MenuController,
    public app: App,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public filmsData: FilmsData,
    public utility: Utility,
    public actionSheetCtrl: ActionSheetController
  ) {
    
    
      
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


  goToDetail(item) {
    this.menu.close();
    let nav = this.app.getRootNav();
    nav.push(FilmsDetailPage, item);
  } 

}
