import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private cookieService: CookieService) { }

  deleteFromCart(item: Item) {
    let i = this.cartItems.findIndex(cartItem => item.barcode == cartItem.cartItem.barcode);
    if (i != -1) {
      // this.item.count--;
      if (this.cartItems[i].count == 1) {
        this.cartItems.splice(i, 1);
      } else {
        this.cartItems[i].count--;
      }
      this.cartChanged.next(this.cartItems);
      this.cookieService.set('Ostukorv', JSON.stringify(this.cartItems));
      return true;
    }
    return false;
  }

  addToCart(item: Item) {
    let i = this.cartItems.findIndex(cartItem => item.barcode == cartItem.cartItem.barcode);
    if (i == -1) {
      this.cartItems.push({ cartItem: item, count: 1 });
    } else {
      this.cartItems[i].count += 1;
    }
    this.cartChanged.next(this.cartItems);
    this.cookieService.set('Ostukorv', JSON.stringify(this.cartItems));
  }


}
