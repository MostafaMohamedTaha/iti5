import { Injectable } from '@angular/core';
import { IProduct } from '../models/Iproduct';
import { productList } from '../models/IproductDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product:IProduct[];
  constructor() { 
    this.product=productList
  }
  //#region  crud

  readAll():IProduct[]{
    return this.product;
  }
  readById(id:number):IProduct |undefined{
    return this.product.find(x=>x.id==id)
  }
  create(prod:IProduct):void{
    let nextId=productList[productList.length-1].id+1
    prod.id=nextId
    this.product.push(prod)
  }
  update(id:number,prod:IProduct):void{
    let index=this.product.findIndex(x=>x.id==id)
    this.product[index].id=prod.id
    this.product[index].name=prod.name
    this.product[index].description=prod.description
    this.product[index].price=prod.price
    this.product[index].quantity=prod.quantity
  }
  delete(id:number):void{
    let index= this.product.findIndex(x=>x.id==id)
    this.product.splice(index,1)
  }
  //#endregion
}
