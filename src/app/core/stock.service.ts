import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class StockService {

  constructor(private http: HttpClient) { }

  getStock(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>('/assets/sampleStock.json');
  }

  addToStock(id: number, amount: number) { }

  increaseStockItemAmount() { }

  decreaseStockItemAmount() { }
}

export interface Item {
  id: number;
  name: string;
  amount: number;
}

export interface ShoppingList {
  id: number;
  name: string;
  items: Item[];
}

export enum StockItemAmount {
  LOW = 'low',
  MID = 'mid',
  HIGH = 'high'
}
