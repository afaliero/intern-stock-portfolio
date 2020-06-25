import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock';
import { STOCKS } from '../portfolio-stocks';
import { StocksComponent } from '../stocks/stocks.component';
import { StockDataService } from '../stock-data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent extends StocksComponent implements OnInit {

  ngOnInit(): void {
  }

  addTodo(value: string) {    
    var len = STOCKS.push({
      ticker: value,
      price: 0,
      company: "X",
      returns: -100,
      june15: 100000,
      marketCap: 0,
    })
    var stockApi = new StockDataService;
    stockApi.callApi(len - 1);
  } 


}
