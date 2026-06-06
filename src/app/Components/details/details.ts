import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { StaticProducts } from '../../Services/static-products';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  product:IProduct|null=null;
  productId:number|null=null;
  arrIDs:number[];
  constructor(private _activatedRouter:ActivatedRoute,private _staticProduct:StaticProducts, private _location:Location,private _router:Router){
this.arrIDs=this._staticProduct.mapProductsToIds();
  }
  ngOnInit(): void {
   // this.productId=this._activatedRouter.snapshot.paramMap.get('id');
  //  this.product=this._staticProduct.getProductByID(Number(this.productId));

   this._activatedRouter.paramMap.subscribe((paramMap)=>{  //subscribe to observale paramMap to detect any change 
    this.productId=Number(paramMap.get('id'));
    this.product=this._staticProduct.getProductByID(Number(this.productId));
   })
   
  }
  back(){
this._location.back();
  }

  prev(){
    let currentId=this.arrIDs.findIndex((id)=>id==Number(this.productId))
    //this.productId=arrIDIndexs[currentId-1].toString();
    if(currentId!=0)
      this._router.navigateByUrl(`/details/${this.arrIDs[currentId-1]}`)
  }
  next(){
  let currentId=this.arrIDs.findIndex((id)=>id==Number(this.productId))
  // this.productId=arrIDIndexs[currentId+1].toString();
  if(currentId!=this.arrIDs.length-1)
    this._router.navigateByUrl(`/details/${this.arrIDs[currentId+1]}`)
  }
}
