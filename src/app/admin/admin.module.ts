import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ItemModule } from '../item/item.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AddItemComponent,
    EditItemComponent,
    AdminHomeComponent,
    ViewItemsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule,
    ItemModule // import, et export alt kätte saada
  ]
})
export class AdminModule { }
