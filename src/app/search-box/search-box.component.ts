import { Component, OnInit, Input } from '@angular/core';
import { StockDataService } from '../stock-data.service';
import { NEW_STOCKS} from '../new-portfolio';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private stockApi: StockDataService) {

  }

  addTodo(value: string) {    
    var len = NEW_STOCKS.push({
      ticker: value,
      price: 0,
      exchange: '',
      marketCap: 0,
      company: '',
      logo: '',
    })
    this.stockApi.callApiNew(NEW_STOCKS[len - 1]);
    console.log(NEW_STOCKS[len - 1]);
  } 


}
