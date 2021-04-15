import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './admin/item/add-item/add-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CarouselSettingsComponent } from './admin/carousel-settings/carousel-settings.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { ViewCategoriesComponent } from './admin/category/view-categories/view-categories.component';
import { EditItemComponent } from './admin/item/edit-item/edit-item.component';
import { ViewItemsComponent } from './admin/item/view-items/view-items.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './item/view/view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view/:itemId', component: ViewComponent },
  { path: 'cart', component: CartComponent },

  {
    path: 'admin', canActivate: [AuthGuard], children: [
      { path: '', component: AdminHomeComponent },
      { path: 'add-item', component: AddItemComponent },
      { path: 'edit-item/:itemId', component: EditItemComponent },
      { path: 'view-items', component: ViewItemsComponent },
      { path: 'carousel', component: CarouselSettingsComponent },
      { path: "categories", component: ViewCategoriesComponent },
      { path: "add-category", component: AddCategoryComponent },
    ]
  },

  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
