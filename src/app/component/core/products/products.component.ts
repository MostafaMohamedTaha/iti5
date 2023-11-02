import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/Iproduct';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit{
  products:IProduct[]=[] 

  constructor(private prod:ProductService) {}
  ngOnInit(): void {
    this.products=this.prod.readAll()
  }
  delete(id:number){
    var result=confirm("do you want delete")
    if(result){
      this.prod.delete(id)
    }
  }
}
