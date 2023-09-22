import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor() {}

  getBaseUrl() {
    return 'https://rawg-video-games-database.p.rapidapi.com';
  }

  getHeaders() {
    return new HttpHeaders({
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      'x-rapidapi-key': '45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0'
    });
  }

  getParams() {
    return new HttpParams()
    .set('key', 'c13d9de91ed24b13abd23ec72a84ddbe')
  }
}
