import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/share/navbar/navbar.component';
import { HomeComponent } from './component/core/home/home.component';
import { ProductsComponent } from './component/core/products/products.component';
import { FooterComponent } from './component/share/footer/footer.component';
import { SidebarComponent } from './component/share/sidebar/sidebar.component';
import { ProductDetailsComponent } from './component/core/products/product-details/product-details.component';
import {  NgIconsModule } from '@ng-icons/core';
import { bootstrapInfoCircle, bootstrapPencilSquare, bootstrapTrash3 } from '@ng-icons/bootstrap-icons';
import { ProductFormComponent } from './component/core/products/product-form/product-form.component';
import { ProductNewComponent } from './component/core/products/product-new/product-new.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    SidebarComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    ProductNewComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({ bootstrapInfoCircle, bootstrapPencilSquare, bootstrapTrash3 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
