import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { StoreApiResponse, StoreDetailApiResponse } from '../models/store';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    constructor(
        private http: HttpClient,
        private base: BaseService,
    ) { }

    getStoreList(): Observable<StoreApiResponse> {
        let url = `${this.base.getBaseUrl()}/stores`;
        const headers = this.base.getHeaders();
        const params = this.base.getParams();
        return this.http.get<StoreApiResponse>(url, { headers, params });
    }

    getStoreDetail(storeId: string): Observable<StoreDetailApiResponse> {
        let url = `${this.base.getBaseUrl()}/stores/${storeId}`;
        const headers = this.base.getHeaders();
        const params = this.base.getParams();
        return this.http.get<StoreDetailApiResponse>(url, { headers, params });
    }

    getGameDetail(gameId: string) {
        let url = `${this.base.getBaseUrl()}/games/${gameId}`;
        const headers = this.base.getHeaders();
        const params = this.base.getParams();
        return this.http.get(url, { headers, params });
    }
}
