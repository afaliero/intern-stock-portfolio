import { Component } from '@angular/core';
import { StockDataService } from './stock-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intern Stock Picks';
  subtitle = 'RCG Summer Intern Portfolio 2020';
  authors = 'Anna Faliero and Sara Abdali';

  constructor() {
    new StockDataService();
  }

  }
  
  
