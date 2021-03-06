import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
  constructor(private cartService: CartService,
    private cookieService: CookieService) { }

  // kui minnakse HTMLI, pannakse ngOnInit käima
  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.calculateSumOfCart();
  }

  onDeleteAllFromCart(i: number) {
    this.cartService.cartItems.splice(i, 1);
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    this.cartService.cartItems.splice(0);
    this.calculateSumOfCart();
  }

  onDeleteOneFromCart(item: Item) {
    this.cartService.deleteFromCart(item);
    this.calculateSumOfCart();
  }

  onAddToCart(item: Item) {
    this.cartService.addToCart(item);
    this.calculateSumOfCart();
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartItems.forEach(item => {
      // this.sumOfCart = this.sumOfCart + item.price;
      this.sumOfCart += item.cartItem.price * item.count;
    });
    this.cartService.cartChanged.next(this.cartService.cartItems);
    this.cookieService.set('Ostukorv', JSON.stringify(this.cartService.cartItems));
  }



}
