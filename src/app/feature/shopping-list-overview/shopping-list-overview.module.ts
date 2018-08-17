import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ShoppingListViewModule } from '../shopping-list/shopping-list-view.module';
import { ShoppingListOverviewComponent } from './shopping-list-overview.component';

@NgModule({
  imports: [SharedModule,
  ShoppingListViewModule],
  declarations: [ShoppingListOverviewComponent],
  exports: [ShoppingListOverviewComponent]
})
export class ShoppingListOverviewModule { }
