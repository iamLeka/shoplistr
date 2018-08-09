import { NgModule } from '@angular/core';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { StockModule } from './stock/stock.module';

@NgModule({
  imports: [
    StockModule,
    ShoppingListComponent
  ],
  exports: [
    StockModule,
    ShoppingListComponent
  ]
})
export class FeatureModule { }
