import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from './stock.service';


@Injectable()
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  getShoppingLists(): Observable<Array<ShoppingList>> {
    return this.http.get<ShoppingList[]>('/assets/sampleShoppingLists.json');
  }
}

export interface ShoppingList {
  name: string;
  shoppingListItems: Array<Item>;
}
