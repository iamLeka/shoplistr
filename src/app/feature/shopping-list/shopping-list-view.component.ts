import { Component, Input } from '@angular/core';

import { ShoppingList } from '../../core/stock.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.scss']
})
export class ShoppingListViewComponent {

@Input() shoppingList: ShoppingList;
}
