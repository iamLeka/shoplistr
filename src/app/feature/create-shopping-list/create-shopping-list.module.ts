import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CreateShoppingListComponent } from './create-shopping-list.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CreateShoppingListComponent],
  exports: [
    CreateShoppingListComponent
  ]
})
export class CreateShoppingListModule { }
