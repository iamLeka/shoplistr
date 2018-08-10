import { NgModule } from '@angular/core';

import { CreateShoppingListModule } from './create-shopping-list/create-shopping-list.module';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';
import { StockModule } from './stock/stock.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
    StockModule,
    ShoppingListsModule,
    ToolbarModule,
    CreateShoppingListModule
  ],
  exports: [
    StockModule,
    ShoppingListsModule,
    ToolbarModule,
    CreateShoppingListModule
    ]
})
export class FeatureModule { }
