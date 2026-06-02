import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './Components/footer/footer';
import { NavBar } from './Components/nav-bar/nav-bar';
import { Products } from './Components/products/products';
import { Order } from "./Components/order/order";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, Order],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eCommerceApp');
}
