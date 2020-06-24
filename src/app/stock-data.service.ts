import { Injectable } from '@angular/core';
import { STOCKS } from './portfolio-stocks';
import * as finnhub from 'finnhub';

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "brp3olnrh5rdpcujeupg";
const finnhubClient = new finnhub.DefaultApi();

@Injectable()
export class StockDataService {
    constructor() {
    }

    callApi(index: number): void {
      finnhubClient.quote(STOCKS[index].ticker, (error, data, response) => {
        STOCKS[index].price = data.c;
      })
    }
}
