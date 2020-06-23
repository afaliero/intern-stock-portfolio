import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { STOCKS } from '../portfolio-stocks';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks = STOCKS;
  selectedStock: Stock;

  constructor() {
    this.setRank();
   }
  ngOnInit(): void {
  }
  setRank() {
    for(var i = 0; i < this.stocks.length; i++) {
      var x = this.stocks[i];
      x.rank = i + 1;
      x.returns = (x.price - x.june15)/ x.june15 * 100;
    }
  }
  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

}