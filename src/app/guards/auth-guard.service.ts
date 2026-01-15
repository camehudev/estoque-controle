import { Injectable } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { Observable } from 'rxjs';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private userService: UserService,
    private router: Router
    
  ) { }


  canActivate(): 
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> |
    boolean |    
    UrlTree{
        if(!this.userService.isLoggedIn()){
          this.router.navigate(['/login']);
          return false;
        }

        this.userService.isLoggedIn();
        return true
      }

   
}
