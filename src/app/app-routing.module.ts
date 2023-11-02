import { NgModule } from '@angular/core';
import { RouterModule, Routes,RouterLink } from '@angular/router';
import { HomeComponent } from './component/core/home/home.component';
import { ProductsComponent } from './component/core/products/products.component';
import { ProductDetailsComponent } from './component/core/products/product-details/product-details.component';
import { ProductFormComponent } from './component/core/products/product-form/product-form.component';
import { ProductNewComponent } from './component/core/products/product-new/product-new.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:''},
  {path:'products',component:ProductsComponent},
  {path:'products/details/:id',component:ProductDetailsComponent},
  {path:'products/edit/:id',component:ProductFormComponent},
  {path:'products/new',component:ProductNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
