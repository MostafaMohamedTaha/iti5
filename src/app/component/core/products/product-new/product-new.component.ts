import { productList } from './../../../models/IproductDetails';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/component/models/Iproduct';
import { ProductService } from 'src/app/component/service/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent {
  product:IProduct ={
    id:0,
    name:'',
    description:'',
    price:0,
    quantity:0
  }
  productId:number=0
  constructor(private router:Router, private ProductService:ProductService) {}
  
    // this.productId=this.activeRouter.snapshot.params['id']
    // if(this.productId!=0){
    //   let prod=this.ProductService.readById(this.productId)
    //   if(prod){
    //     this.product=prod
    //   }
    // }
  
  getData(e:Event){
    e.preventDefault()
    console.log(this.product)
    this.router.navigate(['/products'])
    if(!this.productId){
      this.ProductService.create(this.product)
    }
  }
}
