import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingListComponent } from '../feature/shopping-list/shopping-list.component';


@Injectable()
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  getShoppingLists(): Observable<Array<ShoppingListComponent>> {
    return this.http.get<Array<ShoppingListComponent>>('/assets/sampleShoppingLists.json');
  }
}


