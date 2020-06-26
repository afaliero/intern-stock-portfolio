import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { STOCKS } from '../portfolio-stocks';
import { StockDataService } from '../stock-data.service';
import { NEW_STOCKS } from '../new-portfolio';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

/** This class deals with the ordered list of stocks in
 * the intern portfolio (plus any the user adds).
 */
export class StocksComponent implements OnInit {
  stocks = STOCKS;
  selectedStock: Stock;

  constructor(private stockApi: StockDataService) {
    stockApi.subject.subscribe(x => {
      this.stocks = STOCKS.sort((a, b) => (a.returns < b.returns) ? 1 : -1);
      if (NEW_STOCKS[0] == null) {
        NEW_STOCKS.shift();
      }
    });
   }

  ngOnInit(): void {
    this.updateStockArray();
  }

  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

  /** Assign the % returns each stock has
   * using its current price and its price EOD June 15, 2020.
   */
  updateStockArray() {
    for(var i = 0; i < STOCKS.length; i++) {
      this.stockApi.callApi(STOCKS[i]);
    }
  }
}
