import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProducts {
  products:IProduct[];

  constructor(){
    this.products=[
      {id:100,name:"dell Laptop",price:5000,image:'Smartpones.jpg',quantity:3,catId:1},
      {id:200,name:"lenovo Laptop",price:5000,image:"Smartpones.jpg",quantity:2,catId:1},
      {id:300,name:"iphone ",price:5000,image:"Smartpones.jpg",quantity:4,catId:2},
      {id:400,name:"samsung ",price:5000,image:"Smartpones.jpg",quantity:1,catId:2},
      {id:500,name:"oppo tablet",price:5000,image:"Smartpones.jpg",quantity:3,catId:3},
      {id:600,name:"samsung tablet ",price:5000,image:"Smartpones.jpg",quantity:2,catId:3}

    ];
  }

  getAllProducts():IProduct[]{
    return this.products;
  }

  getProductByID(id:number):IProduct|null{
   let foundedID= this.products.find((prd)=>prd.id==id);
   return foundedID?foundedID:null
  }

  getProductByCatID(Catid:number):IProduct[]{
    let foundedID= this.products.filter((prd)=>prd.catId==Catid);
    return foundedID
   }
}
