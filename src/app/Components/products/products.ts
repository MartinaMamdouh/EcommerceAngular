import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { NgFor } from '@angular/common';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCard } from '../../Directives/highlight-card';
@Component({
  selector: 'app-products',
  imports: [NgFor,FormsModule,HighlightCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges {
  products:IProduct[];
  totalCount:number;
 @Output() onCountChange :EventEmitter<number>;
  filteredPrd:IProduct[];
  @Input() receivedCat:number=0;

  constructor(){
    this.products=[
      {id:100,name:"dell Laptop",price:5000,image:'Smartpones.jpg',quantity:3,catId:1},
      {id:200,name:"lenovo Laptop",price:5000,image:"Smartpones.jpg",quantity:2,catId:1},
      {id:300,name:"iphone ",price:5000,image:"Smartpones.jpg",quantity:4,catId:2},
      {id:400,name:"samsung ",price:5000,image:"Smartpones.jpg",quantity:1,catId:2},
      {id:500,name:"oppo tablet",price:5000,image:"Smartpones.jpg",quantity:3,catId:3},
      {id:600,name:"samsung tablet ",price:5000,image:"Smartpones.jpg",quantity:2,catId:3}

    ];
    this.totalCount=0;
    this.onCountChange=new EventEmitter<number>();
    this.filteredPrd=this.products;
  }
  Calculate(price:number,countInp:string){
    this.totalCount+=price* parseInt(countInp);
this.onCountChange.emit(this.totalCount);
  }
ngOnChanges() {
 this.filterCat(); 
}
  filterCat(){
    if(this.receivedCat==0){
      this.filteredPrd=this.products;
    }else{
      this.filteredPrd=this.products.filter((prd)=>prd.catId==this.receivedCat);

    }
  }
  
    }

