import { Component, OnInit, Input } from '@angular/core';
import { STOCKS } from '../portfolio-stocks';
import { StocksComponent } from '../stocks/stocks.component';
import { StockDataService } from '../stock-data.service';
import { Stock } from '../stock';

export var EXTRA_STOCKS: Stock[] = [];
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private stockApi: StockDataService) {

  }

  addTodo(value: string) {    
    var len = EXTRA_STOCKS.push({
      ticker: value,
      price: 0,
      company: value,
      returns: -100,
      june15: 100000,
      marketCap: 0,
    })
    this.stockApi.callApi(EXTRA_STOCKS, len - 1);
    console.log(EXTRA_STOCKS[EXTRA_STOCKS.length - 1]);
  } 


}
