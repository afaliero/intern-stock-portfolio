  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ChartComponent } from './chart/chart.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    //ChartComponent,
    StocksComponent,
    StockInfoComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }