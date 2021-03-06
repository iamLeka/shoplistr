import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Item, StockService } from '../../core/stock.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stock$: Observable<Array<Item>>;

  constructor(
    private stockService: StockService
  ) {
  }

  ngOnInit() {
    this.getStock();
  }

  getStock() {
    this.stock$ = this.stockService.getStock();
  }



}

