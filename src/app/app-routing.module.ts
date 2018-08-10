import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateShoppingListComponent } from './feature/create-shopping-list/create-shopping-list.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list.component';
import { StockComponent } from './feature/stock/stock.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/stock',
    pathMatch: 'full'
  }, {
    path: 'stock',
    component: StockComponent
  }, {
    path: 'shoppinglist',
    component: ShoppingListComponent
  }, {
    path: 'createshoppinglist',
    component: CreateShoppingListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule
  ]
})
export class AppRoutingModule { }
