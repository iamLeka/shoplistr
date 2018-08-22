import { Component, Input, OnInit } from '@angular/core';

import { Item, StockService } from '../../core/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  @Input() stockItem: Item;

  constructor(private stockService: StockService) { }

  ngOnInit() {
  }

  increaseStock(item: Item) {
    item.amount = item.amount + 1;
    this.stockService.increaseStockItemAmount();
  }

  decreaseStock(item: Item) {
    item.amount = item.amount - 1;
    this.stockService.decreaseStockItemAmount();
  }
}
