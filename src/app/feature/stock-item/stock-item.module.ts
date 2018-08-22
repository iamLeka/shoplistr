import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { StockItemComponent } from './stock-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [StockItemComponent],
  exports: [StockItemComponent]
})
export class StockItemModule { }
