import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingListService } from '../../core/shopping-list.service';
import { ShoppingList } from '../../core/stock.service';


@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-list-overview.component.html',
  styleUrls: ['./shopping-list-overview.component.css']
})
export class ShoppingListOverviewComponent implements OnInit {

  shoppingLists$: Observable<Array<ShoppingList>>;
  showList = false;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
    this.getShoppingLists();
  }

  getShoppingLists() {
    this.shoppingLists$ = this.shoppingListService.getShoppingLists();
  }
  toggle(): void {
    console.log('toggle button click');
    this.showList = !this.showList;
    console.log(this.showList);
  }
}
