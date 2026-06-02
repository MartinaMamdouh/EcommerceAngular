import { Component } from '@angular/core';
import { Products } from "../products/products";
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [Products,FormsModule,NgFor],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedCatId:number=0;
  categories:ICategory[];
  totalOrderPrice:number=0;
  constructor(){
    this.categories=[
      {id:1,name:"laptop"},
      {id:2,name:"phone"},
      {id:3,name:"tablet"}
    ]
  }
  BindPrice(totalCount:number){
    this.totalOrderPrice=totalCount;
  }
  
}
