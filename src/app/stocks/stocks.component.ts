import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { STOCKS } from '../portfolio-stocks';
import { StockDataService } from '../stock-data.service';

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
   }

  ngOnInit(): void {
    this.updateStockArray();
  }

  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

  /** Updates the returns & rank of the stock array shown on webiste. */
  updateStockArray() {
    this.setReturns();
    this.quicksort(this.stocks, 0, this.stocks.length - 1);
  }

  /** Assign the % returns each stock has 
   * using its current price and its price EOD June 15, 2020. 
   */
  setReturns() {
    for(var i = 0; i < STOCKS.length; i++) {
      this.stockApi.callApi(i);
      console.log(STOCKS)
    }
  }

  quicksort(arr: Stock[], low: number, high: number) {
    if (low < high) {
      let pi: any = this.partate(arr, low, high);
      this.quicksort(arr, low, pi - 1);
      this.quicksort(arr, pi + 1, high);
    }
  }

  partate(arr: Stock[], low: number, high: number) {
    let pivot: number = arr[high].returns;
    let i: number = (low - 1);

    for (let j = low; j <= high - 1; j++) {
      if (arr[j].returns >= pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let tempN = arr[high];
    arr[high] = arr[i + 1];
    arr[i + 1] = tempN;
    return (i + 1);
  }


  round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

}