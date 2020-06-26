import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { STOCKS } from './portfolio-stocks';
import * as finnhub from 'finnhub';
import { Subject } from 'rxjs';

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "brp3olnrh5rdpcujeupg";
const finnhubClient = new finnhub.DefaultApi();

@Injectable()
export class StockDataService {
  subject: Subject<Stock> = new Subject<Stock>();
  constructor() {
  }

  round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  callApi(stock: Stock): void {
    finnhubClient.quote(stock.ticker, (error, data, response) => {
      stock.price = (data.c).toFixed(2);
      stock.returns =  this.round((stock.price / stock.june15 - 1) * 100, 2);
      finnhubClient.companyProfile2({'symbol': stock.ticker}, (error, data, response) => {
        stock.marketCap = data.marketCapitalization / 1000;
        stock.marketCap = this.round(stock.marketCap, 2);
        stock.company = data.name;
        if (stock.logo == '')
          stock.logo = data.logo;
        this.subject.next(stock);
      });
    });
  }
}
