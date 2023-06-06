import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class TokenHelperService {
  isLogin: boolean = false;
  helper = new JwtHelperService();
  isValidTokenExist(token: any): boolean {
    try {
      this.helper.decodeToken(token)
      return true;
    } catch (error) {
      return false;
    }
  }
}