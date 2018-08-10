import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from './shopping-list.service';
import { StockService } from './stock.service';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    StockService,
    ShoppingListService
  ]
})
export class CoreModule { }
