import { NgModule } from '@angular/core';

import { ShoppingListOverviewModule } from './shopping-list-overview/shopping-list-overview.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { StockModule } from './stock/stock.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
    StockModule,
    ShoppingListOverviewModule,
    ToolbarModule,
    ShoppingListModule
  ],
  exports: [
    StockModule,
    ShoppingListOverviewModule,
    ToolbarModule,
    ShoppingListModule
    ],
  declarations: []
})
export class FeatureModule { }
