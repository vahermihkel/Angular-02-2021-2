import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [];

  url: string = 'https://webshio-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  // PUT - asendatakse kõik asjad ära andmebaasis selle väärtusega, mis kaasa anname
  saveItemsToDatabase(): Observable<Object> {
    // this.items = this.items.map(item => { return { ...item, producer: "EU " + item.producer } });
    // this.items = this.items.map(item => ({ ...item, barcode: this.getRandomNumber() }));
    // console.log(this.items);
    return this.http.put(this.url + "items.json", this.items);
  }

  getRandomNumber() {
    return Math.floor((Math.random() * 99999999 - 10000000) + 10000000)
  }

  // GET - võtab andmebaasist
  getItemsFromDatabase(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + "items.json");
  }

  // POST - lisatakse väärtus juurde, mis kaasa anname
  addItemToDatabase(item: Item) {
    console.log(item);
    return this.http.post(this.url + "items.json", item)
    // .subscribe(
    // response => {
    //   console.log(response)
    // },
    // error => {
    //   console.log(error)
    // }
    // )
  }

}

// item!: Item;    onAdd(item: Item){}          getItem():Item {}      void - ei tagasta funktsioonis midagi (return puudub)
// new Item(price, category, title, imgSrc)
// this.http.get<Item>()       itemChanged = new Subject<Item>();
