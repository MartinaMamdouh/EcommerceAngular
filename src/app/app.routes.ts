import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { Order } from './Components/order/order';
import { Details } from './Components/details/details';
import { Login } from './Components/login/login';
import { authGuard } from './Guards/auth-guard-guard';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'products',component:Products, canActivate:[authGuard]},
    {path:'details/:id',component:Details},
    {path:'orders',component:Order},
    {path:'login',component:Login}
];
