import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ShoppingListViewComponent } from './shopping-list-view.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ShoppingListViewComponent],
  exports: [ShoppingListViewComponent]
})
export class ShoppingListViewModule { }
