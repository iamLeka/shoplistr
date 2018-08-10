import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ShoppingListComponent],
  exports: [ShoppingListComponent]
})
export class ShoppingListModule { }
