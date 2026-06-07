import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
private authSubject:BehaviorSubject<boolean>
constructor(){
  this.authSubject=new BehaviorSubject<boolean>(false);
}
  login(){
    localStorage.setItem('token','sdsfsgrgzsdvdvfv');
    this.authSubject.next(true);
  }
  logout(){
    localStorage.removeItem('token');
    this.authSubject.next(false);
  }
  isLoggedin():boolean{
    return localStorage.getItem('token')?true:false
  }
  getAuthSubject(){
   return this.authSubject
  }
}
