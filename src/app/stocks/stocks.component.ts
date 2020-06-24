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
    console.log(this.stockApi.callApi());
  }
  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

  /** Updates the returns & rank of the stock array shown on webiste. */
  updateStockArray() {
    this.setReturns();
    this.quicksort(this.stocks, 0, this.stocks.length - 1);
    this.setRank();
  }

  /** Assign the % returns each stock has 
   * using its current price and its price EOD June 15, 2020. 
   */
  setReturns() {
    for(var i = 0; i < this.stocks.length; i++) {
      var x = this.stocks[i];
      var res = (x.price - x.june15) / x.june15 * 100;
      x.returns = this.round(res, 2);
    }
  }

  /** This method will be used to sort the stocks by % returns. */
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

  /** Sets rank icon on the left of each stock container based
   * on its index in the sorted stock array list. Call quicksort before this.
   */
  setRank() {
    this.stocks.forEach(element => element.rank 
      = (this.stocks.indexOf(element) + 1));
  }

  round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

}