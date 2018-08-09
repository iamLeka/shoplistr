import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { StockService } from './stock-service.service';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    StockService
  ]
})
export class CoreModule { }
