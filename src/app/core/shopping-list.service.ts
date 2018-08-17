import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingList } from './stock.service';


@Injectable()
export class ShoppingListService {
  myShoppingList: ShoppingList;

  constructor(private http: HttpClient) { }

  getShoppingLists(): Observable<Array<ShoppingList>> {
    return this.http.get<Array<ShoppingList>>('/assets/sampleShoppingLists.json');
  }

  // getShoppingList(id: number): Observable<ShoppingListComponent> {
  //   return this.http.get<Array<ShoppingListComponent>>('/assets/sampleShoppingLists.json')
  //   .filter(values => values.contains(v => v.id === id)).subscribe(item => { } );

  //   }

  getShoppingList(id: number) {
    const shoppingListId = id;
    return this.http.get<Array<ShoppingList>>('/assets/sampleShoppingLists.json')
      .subscribe((results: Array<ShoppingList>) => {
        if (results !== null && results.length > 0) {
          this.myShoppingList = results.find(s => s.id === shoppingListId);
        }
      });
  }
}
