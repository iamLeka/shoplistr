import { NgModule } from '@angular/core';

import { CreateShoppingListModule } from './create-shopping-list/create-shopping-list.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { StockModule } from './stock/stock.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
    StockModule,
    ShoppingListModule,
    ToolbarModule,
    CreateShoppingListModule
  ],
  exports: [
    StockModule,
    ShoppingListModule,
    ToolbarModule,
    CreateShoppingListModule
    ]
})
export class FeatureModule { }
