import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingList, ShoppingListService } from '../../core/shopping-list.service';


@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListOverviewComponent implements OnInit {

  shoppingLists$: Observable<Array<ShoppingList>>;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
    this.getShoppingLists();
    console.log(this.shoppingLists$);
  }

  getShoppingLists() {
    this.shoppingLists$ = this.shoppingListService.getShoppingLists();
  }
}
