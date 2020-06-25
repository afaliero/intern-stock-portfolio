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
   // STOCKS.sort((a, b) => (a.returns > b.returns)? 1 : -1);
  }

<<<<<<< HEAD
  addTodo(value: string) {    
    var len = STOCKS.push({
=======
  addTodo(value: string) {
    STOCKS.push({
>>>>>>> 5d4f17b91d4589c765c6d75be814b2336bf7c641
      ticker: value,
      price: 0,
      company: "X",
      returns: -100,
      june15: 100000,
      marketCap: 0,
      peRatio: 0,
    })
<<<<<<< HEAD
    var stockApi = new StockDataService;
    stockApi.callApi(len - 1);
  } 
=======
    this.updateStockArray();
  }
>>>>>>> 5d4f17b91d4589c765c6d75be814b2336bf7c641


}
