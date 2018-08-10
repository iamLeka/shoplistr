import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { StockComponent } from './stock.component';

@NgModule({
  imports: [SharedModule],
  declarations: [StockComponent],
  exports: [StockComponent]
})
export class StockModule { }
