import { Component, ViewChild } from '@angular/core';
import { Platform, Nav,MenuController, Config, App } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilmsPage } from '../pages/films/films';
import { FilmsCategoriePage } from '../pages/films-categorie/films-categorie';

import { TranslateService } from '@ngx-translate/core'



@Component({ templateUrl:'app.html'  })


export class MyApp {
  rootPage = FilmsPage;
  pages: Array<{title: string,icon:string}>;

  @ViewChild(Nav) nav: Nav;

  

  constructor(private translate: TranslateService,public menu: MenuController, private platform: Platform, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, public app: App) {
    this.initTranslate();
    this.pages = [
                    { title: 'Comédie',icon:'film'},
                    { title: 'Horreur',icon:'film'},
                    { title: 'Romance',icon:'film'},
                    { title: 'Action',icon:'film'},
                    { title: 'Thriller',icon:'film'},
                    { title: 'Fantastique',icon:'film'}
                 ]
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(item) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.menu.close();
    let nav = this.app.getRootNav();
    nav.push(FilmsCategoriePage, item);
  }
}
