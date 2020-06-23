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
    this.getRank();
   }

  ngOnInit(): void {
  }

  getRank() {
    for(var i = 0; i < this.stocks.length; i++) {
      this.stocks[i].rank = i;
    }
  }

  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

}