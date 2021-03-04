import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    // let id = this.activatedRoute.snapshot.paramMap.get('itemId');
    // console.log(id);
    // let toode = this.itemService.items[(Number)(id)];
    // console.log(toode);
  }

}
