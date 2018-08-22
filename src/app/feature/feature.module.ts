import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { ShoppingListOverviewModule } from './shopping-list-overview/shopping-list-overview.module';
import { ShoppingListViewModule } from './shopping-list/shopping-list-view.module';
import { StockItemModule } from './stock-item/stock-item.module';
import { StockModule } from './stock/stock.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
    StockModule,
    ShoppingListOverviewModule,
    ToolbarModule,
    ShoppingListViewModule,
    LoginModule,
    StockItemModule
  ],
  exports: [
    StockModule,
    ShoppingListOverviewModule,
    ToolbarModule,
    ShoppingListViewModule,
    LoginModule,
    StockItemModule
    ],
  declarations: []
})
export class FeatureModule { }
