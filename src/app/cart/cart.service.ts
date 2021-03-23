import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // [{title: "PEALKIRI", price: 50, category: "fishing", ...},{title: "TEINE", price: 50,...},{title: "PEALKIRI", price: 49,...}]
  // [
  //  {cartItem:{title: "PEALKIRI", price: 50, category: "fishing", ...}, count:12},   ----- nüüd
  //  {title: "TEINE", price: 50,...},     ------ enne
  //  {title: "PEALKIRI", price: 49,...}   ------ enne
  //  ]
  cartItems: { cartItem: Item, count: number }[] = [];
  cartChanged = new Subject<{ cartItem: Item, count: number }[]>();

  constructor() { }

}
