import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock';
import { STOCKS } from '../portfolio-stocks';
import { StocksComponent } from '../stocks/stocks.component';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent extends StocksComponent implements OnInit {

  ngOnInit(): void {
  }

  addTodo(value: string) {    
    STOCKS.push({
      ticker: value,
      price: 0,
      company: "X",
      returns: 0,
      june15: 100000,
      marketCap: 0,
      peRatio: 0,
    })
    this.updateStockArray();
  } 


}
