import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { NgFor } from '@angular/common';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCard } from '../../Directives/highlight-card';
import {StaticProducts} from '../../Services/static-products';
import { Router, RouterLink, RouterLinkWithHref, RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-products',
  imports: [NgFor, FormsModule, HighlightCard, RouterOutlet, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges {
  
  totalCount:number;
 @Output() onCountChange :EventEmitter<number>;
  filteredPrd:IProduct[];
  @Input() receivedCat:number=0;

  constructor( private _productService: StaticProducts, private _router:Router){
    
    this.totalCount=0;
    this.onCountChange=new EventEmitter<number>();
    this.filteredPrd=this._productService.getAllProducts();
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
      this.filteredPrd=this._productService.getAllProducts();
    }else{
      this.filteredPrd=this._productService.getProductByCatID(this.receivedCat);

    }
  }
  NavigateToDetails(productId:number){
this._router.navigateByUrl(`/details/${productId}`);
  }
    }

