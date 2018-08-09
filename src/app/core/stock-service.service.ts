import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class StockService {

  constructor(private http: HttpClient) { }

  getStock(): Observable<Array<Item>> {
    return this.http.get<Item[]>('/assets/sampleStock.json');
  }
}

export interface Item {
  id: number;
  name: string;
  amount: StockItemAmount;
}

export enum StockItemAmount {
  LOW = 'low',
  MID = 'mid',
  HIGH = 'high'
}