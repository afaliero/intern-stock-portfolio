import { Component, OnInit, Input } from '@angular/core';
import { StockDataService } from '../stock-data.service';
import { NEW_STOCKS} from '../new-portfolio';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  newStocks = NEW_STOCKS;

  ngOnInit(): void {
  }

  constructor(private stockApi: StockDataService) {

  }

  addTodo(value: string) {    
    var len = this.newStocks.push({
      ticker: value,
      price: 0,
      company: value,
      dailyReturns: 100000,
      marketCap: 0,
      logo: null,
    })
    this.stockApi.callApiNew(this.newStocks[len - 1]);
  } 


}
