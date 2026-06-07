import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../Services/auth-service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit{
  isUserLoggedin:boolean=false
  constructor(private _authService:AuthService){

  }
ngOnInit(): void {
  this._authService.getAuthSubject().subscribe({
    next:(result)=>{
      this.isUserLoggedin=result
      }
  });
}
}
