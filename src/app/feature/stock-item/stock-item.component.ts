import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingListService } from '../../core/shopping-list.service';
import { Item, ShoppingList, StockService } from '../../core/stock.service';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  animations: [
    trigger('increaseTrigger', [
      state('normal', style({})),
      state('green', style({})),
      state('red', style({})),
      transition('normal => green', [
        animate('200ms', keyframes([
          style({ offset: 0 }),
          style({ backgroundColor: '#6FAB42', color: '#fff', offset: 0.1 }),
          style({ offset: 1 })
        ]))]),
      transition('normal => red', [
        animate('200ms', keyframes([
          style({ offset: 0 }),
          style({ backgroundColor: '#BF2727', color: '#fff', offset: 0.1 }),
          style({ offset: 1 })
        ]))])
    ]),
    trigger('slideOpen', [
      state('closed', style({ height: 0, opacity: 0, overflow: 'hidden' })),
      state('open', style({})),
      transition('closed <=> open', animate('150ms'))
    ])
  ]
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


