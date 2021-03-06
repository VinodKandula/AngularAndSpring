/**
 *    Copyright 2016 Sven Loesekann

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/throw';
import { QuoteBf } from '../common/quoteBf';
import { Utils } from './utils';
import { OrderbookBf } from '../common/orderbookBf';

@Injectable()
export class BitfinexService {
  private _reqOptionsArgs = { headers: new HttpHeaders().set( 'Content-Type', 'application/json' ) };
  private readonly _bitfinex = '/bitfinex';  
  BTCUSD = 'btcusd';
  ETHUSD = 'ethusd';
  LTCUSD = 'ltcusd';
  XRPUSD = 'xrpusd';
  
  private _utils = new Utils();
  
  constructor(private http: HttpClient, private pl: PlatformLocation ) { 
  }

  getCurrentQuote(currencypair: string): Observable<QuoteBf> {
      return this.http.get(this._bitfinex+'/'+currencypair+'/current', this._reqOptionsArgs).catch(this._utils.handleError);
  }
   
  getTodayQuotes(currencypair: string): Observable<QuoteBf[]> {
      return this.http.get(this._bitfinex+'/'+currencypair+'/today', this._reqOptionsArgs).catch(this._utils.handleError);
  }

  get7DayQuotes(currencypair: string): Observable<QuoteBf[]> {
      return this.http.get(this._bitfinex+'/'+currencypair+'/7days', this._reqOptionsArgs).catch(this._utils.handleError);
  }

  get30DayQuotes(currencypair: string): Observable<QuoteBf[]> {
      return this.http.get(this._bitfinex+'/'+currencypair+'/30days', this._reqOptionsArgs).catch(this._utils.handleError);
  }
  
  get90DayQuotes(currencypair: string): Observable<QuoteBf[]> {
      return this.http.get(this._bitfinex+'/'+currencypair+'/90days', this._reqOptionsArgs).catch(this._utils.handleError);
  }
  
  getOrderbook(currencypair: string): Observable<OrderbookBf> {
      return this.http.get(this._bitfinex+'/'+currencypair+'/orderbook/', this._reqOptionsArgs).catch(this._utils.handleError);
  }
}
