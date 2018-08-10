import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ShoppingListsComponent } from './shopping-lists.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ShoppingListsComponent],
  exports: [
    ShoppingListsComponent
  ]
})
export class ShoppingListsModule { }
