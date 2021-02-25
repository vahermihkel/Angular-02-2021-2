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

  // dependency injection - Service-i kasutusele võtmine componendis
  constructor(private cartService: CartService) { }

  // kui minnakse HTMLI, pannakse ngOnInit käima
  ngOnInit(): void {
    console.log(this.cartService.cartItems);
    // vasakul saab väärtust, paremal annab väärtust
    this.cartItems = this.cartService.cartItems;
    // efektiivseim on anda seda väärtust ngOnInit sees, sest sellisel juhul läheb seda täpselt vaja
  }

  onDeleteFromCart(i: number) {
    this.cartService.cartItems.splice(i,1);
  }
}
