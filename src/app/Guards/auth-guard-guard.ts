import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  let _authService=inject(AuthService)
  let _router=inject(Router)
  if(_authService.isLoggedin()){
    
    return true;
  }else{
    _router.navigateByUrl('/login');
    return false;
  }
  
};
