import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { StockItemModule } from '../stock-item/stock-item.module';
import { StockComponent } from './stock.component';

@NgModule({
  imports: [SharedModule, StockItemModule],
  declarations: [StockComponent],
  exports: [StockComponent]
})
export class StockModule { }
