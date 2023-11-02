import { ProductService } from 'src/app/component/service/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/component/models/Iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product:IProduct ={
    id:0,
    name:'',
    description:'',
    price:0,
    quantity:0
  }
  productId:number=0
  constructor(private router:Router,private activeRouter:ActivatedRoute,private ProductService:ProductService) {}
  ngOnInit(): void {
    this.productId=this.activeRouter.snapshot.params['id']
    if(this.productId!=0){
      let prod=this.ProductService.readById(this.productId)
      if(prod){
        this.product=prod
      }
    }
  }
  getData(e:Event){
    e.preventDefault()
    console.log(this.product)
    this.router.navigate(['/products'])
    if(this.productId){
      this.ProductService.update(this.productId,this.product)
    }
  }
}
