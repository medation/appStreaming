import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class FilmsData {
  data: any;

  constructor(public http: Http) { }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/films.json')
        .map(this.processData);
    }
  }

  processData(data) {
    this.data = data.json();
    return this.data;
  }

  getFilms() {
    return this.load().map(data => {
      return data.films;
    });
  }

  getFilmsById(i : String) {
    return this.load().map(data => {
      return data.films;
    });
  }

  getMap() {
    return this.load().map(data => {
      return data.map;
    });
  }

}
