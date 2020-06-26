import { Component, OnInit } from '@angular/core';
import { NewStock } from '../new-stock';
import { NEW_STOCKS} from '../new-portfolio';

@Component({
  selector: 'app-new-stocks',
  templateUrl: './new-stocks.component.html',
  styleUrls: ['./new-stocks.component.css']
})
export class NewStocksComponent implements OnInit {
  newStocks = NEW_STOCKS;
  selectedStock: NewStock;

  constructor() { }

  ngOnInit(): void {
  }
  deleteFirst() {
    if (NEW_STOCKS[0] == null) {
      NEW_STOCKS.shift();
    }
  }

  onSelect(stock: NewStock): void {
    this.selectedStock = stock;
  }

}
