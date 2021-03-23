import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { cartItem: Item, count: number }[] = [];
  sumOfCart: number = 0;

  // dependency injection - Service-i kasutusele võtmine componendis
  constructor(private cartService: CartService) { }

  // kui minnakse HTMLI, pannakse ngOnInit käima
  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.calculateSumOfCart();
  }

  onDeleteAllFromCart(i: number) {
    this.cartService.cartItems.splice(i, 1);
    this.cartService.cartChanged.next(this.cartService.cartItems);
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    this.cartService.cartItems.splice(0);
    this.cartService.cartChanged.next(this.cartService.cartItems);
    this.calculateSumOfCart();
  }

  onDeleteOneFromCart(item: Item) {
    // [{title: "PEALKIRI", price: 50,...},{title: "TEINE", price: 50,...},{title: "PEALKIRI", price: 49,...}]
    // {title: "PEALKIRI", price: 49,...}
    let i = this.cartService.cartItems.findIndex(cartItem => item.title == cartItem.cartItem.title);
    if (i != -1) {
      if (this.cartService.cartItems[i].count == 1) {
        this.cartService.cartItems.splice(i, 1);
      } else {
        this.cartService.cartItems[i].count -= 1;
      }
      this.cartService.cartChanged.next(this.cartService.cartItems);
      this.calculateSumOfCart();
    }
  }

  onAddToCart(item: Item) {
    let i = this.cartService.cartItems.findIndex(cartItem => item.title == cartItem.cartItem.title);
    if (i == -1) {
      this.cartService.cartItems.push({ cartItem: item, count: 1 });
    } else {
      this.cartService.cartItems[i].count += 1;
    }
    this.cartService.cartChanged.next(this.cartService.cartItems);
    this.calculateSumOfCart();
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartItems.forEach(item => {
      // this.sumOfCart = this.sumOfCart + item.price;
      this.sumOfCart += item.cartItem.price * item.count;
    });
  }



}
