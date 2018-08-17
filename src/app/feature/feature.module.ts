import { NgModule } from '@angular/core';

import { ShoppingListOverviewModule } from './shopping-list-overview/shopping-list-overview.module';
import { ShoppingListViewModule } from './shopping-list/shopping-list-view.module';
import { StockModule } from './stock/stock.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
    StockModule,
    ShoppingListOverviewModule,
    ToolbarModule,
    ShoppingListViewModule
  ],
  exports: [
    StockModule,
    ShoppingListOverviewModule,
    ToolbarModule,
    ShoppingListViewModule
    ],
  declarations: []
})
export class FeatureModule { }
