import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router : Router
  ){}
 canActivate():boolean { 
   const result = this.authService.isLogin()
   if(result){
     return true
   } else{
     this.router.navigate(["/ask"])
     return false
   }

  }
  
}

// Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
//  next: ActivatedRouteSnapshot, state: RouterStateSnapshot