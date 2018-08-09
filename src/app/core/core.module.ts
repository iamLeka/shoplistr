import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { StockService } from './stock-service.service';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    StockService
  ]
})
export class CoreModule { }
