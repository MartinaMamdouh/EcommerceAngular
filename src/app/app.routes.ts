import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { Order } from './Components/order/order';
import { Details } from './Components/details/details';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'products',component:Products},
    {path:'details/:id',component:Details},
    {path:'orders',component:Order}
];
