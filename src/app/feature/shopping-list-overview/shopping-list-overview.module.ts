import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ShoppingListOverviewComponent } from './shopping-list-overview.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ShoppingListOverviewComponent],
  exports: [ShoppingListOverviewComponent]
})
export class ShoppingListOverviewModule { }
