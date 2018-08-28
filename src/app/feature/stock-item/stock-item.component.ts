import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingListService } from '../../core/shopping-list.service';
import { Item, ShoppingList, StockService } from '../../core/stock.service';
import { openclose, redgreenanimation } from '../../shared/animations';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  animations: [redgreenanimation, openclose]
})
export class StockItemComponent implements OnInit {
  counterstate: String = 'normal';
  submenustate: String = 'closed';
  shoppingLists$: Observable<Array<ShoppingList>>;

  @Input() stockItem: Item;

  constructor(private stockService: StockService,
    private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.getShoppingLists();
  }

  increaseStock(item: Item) {
    item.amount = item.amount + 1;
    this.counterstate = 'green';
    this.stockService.increaseStockItemAmount();
  }

  decreaseStock(item: Item) {
    item.amount = item.amount - 1;
    this.counterstate = 'red';

    this.stockService.decreaseStockItemAmount();
  }

  returnToNormal() {
    this.counterstate = 'normal';
  }

  toggleItemMenu() {
    this.submenustate = this.submenustate === 'open' ? 'closed' : 'open';
  }

  getShoppingLists() {
    this.shoppingLists$ = this.shoppingListService.getShoppingLists();
  }

  getAmountFor(id: number, shoppinglist: ShoppingList) {
    return (shoppinglist.items.find(function (item) { return item.id === id; }) || 0);
  }
}


