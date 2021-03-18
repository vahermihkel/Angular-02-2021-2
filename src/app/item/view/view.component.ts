import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private itemService: ItemService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('itemId'));
    console.log(this.route.snapshot.paramMap);
    console.log(id);
    this.item = this.itemService.items[id];
  }

}
