import { NgModule } from '@angular/core';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { StockModule } from './stock/stock.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
    StockModule,
    ShoppingListModule,
    ToolbarModule
  ],
  exports: [
    StockModule,
    ShoppingListModule,
    ToolbarModule
  ]
})
export class FeatureModule { }
