import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { FilmsData } from '../providers/films-data';

import { FilmsPage } from '../pages/films/films';
import { FilmsCategoriePage } from '../pages/films-categorie/films-categorie';
import { FilmsDetailPage } from '../pages/films-detail/films-detail';
import { FilmsWatchPage } from '../pages/films-watch/films-watch';

import { Utility } from '../providers/utility';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    MyApp,
    FilmsPage,
    FilmsCategoriePage,
    FilmsDetailPage,
    FilmsWatchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmsPage,
    FilmsCategoriePage,
    FilmsDetailPage,
    FilmsWatchPage
  ],
  providers: [
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FilmsData,
    Utility
  ]
})
export class AppModule { }
