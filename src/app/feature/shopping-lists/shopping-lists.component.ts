import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingLists, ShoppingListService } from '../../core/shopping-list.service';


@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {

  shoppingLists$: Observable<Array<ShoppingLists>>;

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
