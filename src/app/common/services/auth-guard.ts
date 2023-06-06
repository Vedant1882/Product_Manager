import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { CanActivate, Router } from '@angular/router';
import {JwtHelperService } from '@auth0/angular-jwt'
import {TokenHelperService } from './tokenHelperService';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  helper = new JwtHelperService();
  constructor(private userService: UserService,private router: Router,private isValidTokenExist:TokenHelperService) { }

  canActivate(): boolean {
    return this.decodeJWTToken();
  }


  decodeJWTToken(): boolean {
     let token = localStorage.getItem("token");
    if(!this.isValidTokenExist.isValidTokenExist(token) || this.helper.isTokenExpired(token)){
      //something went wrong Tostie....
      this.router.navigate(['login', '']);
      return false;
    }
    return true;
  }
}
