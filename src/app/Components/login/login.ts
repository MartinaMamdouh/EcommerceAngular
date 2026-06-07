import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLoggedin:boolean;
  constructor(private _AuthService:AuthService){
this.isLoggedin=this._AuthService.isLoggedin();
console.log(this.isLoggedin);
  }
  login(){
this._AuthService.login();
this.isLoggedin=this._AuthService.isLoggedin();
console.log(this.isLoggedin);
  }
  logout(){
this._AuthService.logout();
this.isLoggedin=this._AuthService.isLoggedin();
console.log(this.isLoggedin);
  }
}
