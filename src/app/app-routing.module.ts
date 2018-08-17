import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListOverviewComponent } from './feature/shopping-list-overview/shopping-list-overview.component';
import { ShoppingListViewComponent } from './feature/shopping-list/shopping-list-view.component';
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
    path: 'shoppinglists',
    component: ShoppingListOverviewComponent,
    children: [{
      path: ':id',
      component: ShoppingListViewComponent}

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
