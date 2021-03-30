import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item!: Item;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private cartService: CartService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('itemId'));
    console.log(this.route.snapshot.paramMap);
    console.log(id);
    this.item = this.itemService.items[id];
    console.log(this.item)
  }

  // stringist numbriks --- Number("123")    (Number)("2312321")
  // numbrist stringiks --- 123.toString()    312412.toLocaleString('fr')

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
