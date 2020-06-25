import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { STOCKS } from './portfolio-stocks';
import * as finnhub from 'finnhub';
import { Subject } from 'rxjs';


const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "brpnqgvrh5rbpquqal90";
const finnhubClient = new finnhub.DefaultApi();


@Injectable()
export class StockDataService {
    data: Subject<Stock> = new Subject<Stock>();

    constructor() {
    }

    callApi(stock: Stock): void {
      finnhubClient.quote(stock.ticker, (error, data, response) => {
        stock.price = (data.c).toFixed(2);
        stock.returns = (stock.price / stock.june15 - 1) * 100;
        // if (index < 14) {
        // var temp = STOCKS[index];
        // var res = (temp.price - temp.june15) / temp.june15 * 100;
        // temp.returns = this.round(res, 2);
        // }
        finnhubClient.companyProfile2({'symbol': stock.ticker}, (error, data, response) => {
          console.log(data);
          stock.marketCap = data.marketCapitalization / 1000;
          stock.marketCap = this.round(stock.marketCap, 2);
          data.next(stock);
        });
      });
      // if (index == STOCKS.length - 1){
      //   console.log("im here");
      //   STOCKS.sort((a,b) => (b.returns - a.returns));
      // }
    }

    round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }
}
