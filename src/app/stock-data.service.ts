import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { STOCKS } from './portfolio-stocks';
import * as finnhub from 'finnhub';

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "brpnqgvrh5rbpquqal90";
const finnhubClient = new finnhub.DefaultApi();

@Injectable()
export class StockDataService {

    constructor() {
    }

    callApi(sArr: Stock[], index: number): void {
      finnhubClient.quote(sArr[index].ticker, (error, data, response) => {
        sArr[index].price = (data.c).toFixed(2);
        if (index < 14) {
        var temp = sArr[index];
        var res = (temp.price - temp.june15) / temp.june15 * 100;
        temp.returns = this.round(res, 2);
        }
      })
      finnhubClient.companyProfile2({'symbol': sArr[index].ticker}, (error, data, response) => {
        sArr[index].marketCap = data.marketCapitalization / 1000;
        sArr[index].marketCap = this.round(sArr[index].marketCap, 2);
      })
    }

    round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }
}
