import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { StaticProducts } from '../../Services/static-products';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  product:IProduct|null=null;
  constructor(private _activatedRouter:ActivatedRoute,private _staticProduct:StaticProducts){

  }
  ngOnInit(): void {
    let productId=this._activatedRouter.snapshot.paramMap.get('id');
    this.product=this._staticProduct.getProductByID(Number(productId));
  }
}
