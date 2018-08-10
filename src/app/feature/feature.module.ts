import { NgModule } from '@angular/core';

import { CreateShoppingListModule } from './create-shopping-list/create-shopping-list.module';
import { ShoppingListOverviewModule } from './shopping-list-overview/shopping-list-overview.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { StockModule } from './stock/stock.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
    StockModule,
    ShoppingListOverviewModule,
    ToolbarModule,
    CreateShoppingListModule,
    ShoppingListModule
  ],
  exports: [
    StockModule,
    ShoppingListOverviewModule,
    ToolbarModule,
    CreateShoppingListModule,
    ShoppingListModule
    ],
  declarations: []
})
export class FeatureModule { }
