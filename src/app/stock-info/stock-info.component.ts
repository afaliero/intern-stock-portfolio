import { Component, OnInit, Input  } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css'],

})
export class StockInfoComponent implements OnInit {
  @Input() stock: Stock;

  constructor() { }

  ngOnInit(): void {
  }

}