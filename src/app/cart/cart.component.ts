import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  sumOfCart: number = 0;

  // dependency injection - Service-i kasutusele võtmine componendis
  constructor(private cartService: CartService) { }

  // kui minnakse HTMLI, pannakse ngOnInit käima
  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.calculateSumOfCart();
  }

  onDeleteFromCart(i: number) {
    this.cartService.cartItems.splice(i, 1);
    this.cartService.cartChanged.next(this.cartService.cartItems);
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    this.cartService.cartItems.splice(0);
    this.cartService.cartChanged.next(this.cartService.cartItems);
    this.calculateSumOfCart();
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartItems.forEach(item => {
      // this.sumOfCart = this.sumOfCart + item.price;
      this.sumOfCart += item.price;
    });
  }



}
