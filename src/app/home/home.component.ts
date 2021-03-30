import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  itemsOriginal: Item[] = [];
  itemsShown: Item[] = [];
  priceSortNumber = 0;
  cookieValue = "";
  // kuupaev = new Date();
  cartItems = [];

  constructor(private cartService: CartService,
    private itemService: ItemService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    // this.items = this.itemService.items;
    // this.itemService.saveItemsToDatabase();


    this.itemService.getItemsFromDatabase().subscribe(itemsFromDatabase => {
      this.itemsOriginal = [];
      this.itemService.items = [];
      for (const key in itemsFromDatabase) {
        const element = itemsFromDatabase[key];
        this.itemsOriginal.push(element);
        this.itemsShown = this.itemsOriginal.slice();
        this.itemService.items.push(element);
      }
      // console.log(itemsFromDatabase);
      // this.items = itemsFromDatabase;
      // this.itemService.items = itemsFromDatabase;

      // slice teeb massiivist koopia
      // splice kustutab massiivist elemendi
      // split teeb stringist massiivi
      // let cartItems = this.cartService.cartItems;
      // this.itemsShown = this.itemsOriginal.map(item => {
      //   cartItems.forEach(cartItem => {
      //     return { ...item, count: cartItem.count }
      //   })
      // })
    });
  }

  onCategoryFilter(category: string) {
    this.itemsShown = this.itemsOriginal.filter(item => item.category == category)
  }

  onSortPrice() {
    if (this.priceSortNumber == 0) {
      this.itemsShown.sort((a, b) => a.price - b.price);
      this.priceSortNumber = 1;
    } else if (this.priceSortNumber == 1) {
      this.itemsShown.sort((a, b) => b.price - a.price);
      this.priceSortNumber = 2;
    } else {
      this.itemsShown = this.itemsOriginal.slice();
      this.priceSortNumber = 0;
    }
  }

  onSortTitle() {
    // titleSortNumber
    this.itemsShown.sort((a, b) => a.title.localeCompare(b.title));
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

// string - jutumärkidega väärtus '12.00'
// number - numriline väärtus 12.00
// boolean - true/false
// object/json - {}
// massiivid-listid - []

