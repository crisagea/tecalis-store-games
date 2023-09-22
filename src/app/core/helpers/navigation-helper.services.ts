import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationHelper {

  constructor() { }

  public openExternalUrl(url: string, sameTab?: boolean) {
    return window.open(this.normalizeExternalUrl(url), sameTab ? '_self' : '_blank');
  }

  private normalizeExternalUrl(url) {
    let normalizeUrl = url;
    var expression = /(www | http:| https:)+[^\s]+[\w]/gi;
    var regex = new RegExp(expression);

    if (!url.match(regex)) {
      normalizeUrl = `https://${url}`;
    }
    
    return normalizeUrl;
  }
}
