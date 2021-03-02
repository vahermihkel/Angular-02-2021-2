import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.items;
  }

  onAddToCart(item: Item) {
    this.cartService.cartItems.push(item);
    this.cartService.cartChanged.next(this.cartService.cartItems);
  }
}

// string - jutumärkidega väärtus '12.00'
// number - numriline väärtus 12.00
// boolean - true/false
// object/json - {}
// massiivid-listid - []

