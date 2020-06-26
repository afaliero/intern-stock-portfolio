import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { EXTRA_STOCKS } from '../search-box/search-box.component';

@Component({
  selector: 'app-extra-stocks',
  templateUrl: './extra-stocks.component.html',
  styleUrls: ['./extra-stocks.component.css']
})
export class ExtraStocksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
