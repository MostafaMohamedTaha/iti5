import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/component/models/Iproduct';
import { ProductService } from 'src/app/component/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  ProductId:number=0;
  product:IProduct | undefined;
  /**
   *
   */
  constructor(private activeRout:ActivatedRoute,private prodService:ProductService) {}
  ngOnInit(): void {
    this.ProductId=this.activeRout.snapshot.params['id']
    this.product=this.prodService.readById(this.ProductId)
  }
}
