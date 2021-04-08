import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css',]
})
export class ItemCardComponent implements OnInit {
  @Input() item!: Item;
  @Input() i!: number; // [SIIN]="muutuja" - info lapsele
  @Input('loggedIn') isLoggedIn!: boolean;
  @Output() itemActiveChanged = new EventEmitter(); // parentis (SIIN)="funktsioon()" sündmus parentile

  constructor(private cartService: CartService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  onItemActive() {
    this.item.isActive = !this.item.isActive;
    this.itemActiveChanged.emit(this.item); // VÄÄRTUSE SAATMINE
  }

  onDeleteFromCart(item: Item) {
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
      this.cookieService.set('Ostukorv', JSON.stringify(this.cartService.cartItems));
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
    this.cookieService.set('Ostukorv', JSON.stringify(this.cartService.cartItems));
  }


}
