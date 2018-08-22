import { Component, Input } from '@angular/core';

import { ShoppingList, StockService } from '../../core/stock.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.scss']
})
export class ShoppingListViewComponent {

@Input() shoppingList: ShoppingList;
showList = false;

constructor(
  private stockService: StockService
) {
}
markAsBought(id: number, amount: number) {
  this.stockService.addToStock(id, amount);
}
toggle(): void {
  this.showList = !this.showList;
}
}
