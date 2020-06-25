import { Injectable } from '@angular/core';
import { STOCKS } from './portfolio-stocks';
import * as finnhub from 'finnhub';

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "brpnqgvrh5rbpquqal90";
const finnhubClient = new finnhub.DefaultApi();

@Injectable()
export class StockDataService {

    constructor() {
    }

    callApi(index: number): void {
      finnhubClient.quote(STOCKS[index].ticker, (error, data, response) => {
        STOCKS[index].price = data.c;
        var temp = STOCKS[index];
        var res = (temp.price - temp.june15) / temp.june15 * 100;
        temp.returns = this.round(res, 2);
      })
      if (index == STOCKS.length - 1){
        console.log("im here");
        STOCKS.sort((a,b) => (b.returns - a.returns));
      }
    }

    round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }



  
}
