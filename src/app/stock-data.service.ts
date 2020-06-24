import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';
import { STOCKS } from './portfolio-stocks';

@Injectable()
export class StockDataService {
    constructor() {
      const socket = new WebSocket('wss://ws.finnhub.io?token=brpnqgvrh5rbpquqal90');

      // Connection opened -> Subscribe
      socket.addEventListener('open', function (event) {
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
      });

      // Listen for messages
      socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
      });

      // Unsubscribe
      var unsubscribe = function(symbol) {
      socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
      }
    }
}

/* const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "brp3olnrh5rdpcujeupg" // Replace this
const finnhubClient = new finnhub.DefaultApi()
*/







