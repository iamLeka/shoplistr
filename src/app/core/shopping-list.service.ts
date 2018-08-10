import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from './stock-service.service';


@Injectable()
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  getShoppingLists(): Observable<Array<ShoppingLists>> {
    return this.http.get<ShoppingLists[]>('/assets/sampleShoppingLists.json');
  }
}

export interface ShoppingLists {
  name: string;
  shoppingListItems: Array<Item>;
}
