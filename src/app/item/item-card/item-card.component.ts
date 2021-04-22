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
  @Input() item!: Item; // [SIIN]="muutuja" - info lapsele
  @Input('loggedIn') isLoggedIn!: boolean;
  @Output() itemActiveChanged = new EventEmitter; // parentis (SIIN)="funktsioon()" sündmus parentile

  constructor(private cartService: CartService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  onItemActive() {
    this.item.isActive = !this.item.isActive;
    this.itemActiveChanged.emit(this.item); // VÄÄRTUSE SAATMINE
  }

  onDeleteFromCart(item: Item) {
    let isDeleted = this.cartService.deleteFromCart(item);
    if (isDeleted) {
      this.item.count--;
    }
  }

  onAddToCart(item: Item) {
    this.cartService.addToCart(item);
    this.item.count++;
  }


}
