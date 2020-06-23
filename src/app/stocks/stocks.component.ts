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
    this.quicksort(this.stocks, 0, this.stocks.length - 1);
   }
  ngOnInit(): void {
  }
  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

  setRank() {
    for(var i = 0; i < this.stocks.length; i++) {
      var x = this.stocks[i];
      x.rank = i + 1;
      var res = (x.price - x.june15) / x.june15 * 100;
      x.returns = this.round(res, 2);
    }
  }

  round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
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


}