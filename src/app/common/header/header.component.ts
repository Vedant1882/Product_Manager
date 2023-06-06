import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenHelperService } from '../services/tokenHelperService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() token: any = "";
  constructor(public tokenHelperService: TokenHelperService, private router: Router) { }

  // isLogin(): boolean{
  //   // if(this.token==""){
  //   //   return false;
  //   // }
  //   // else{
  //     return this.isValidTokenExist.isValidTokenExist(this.token);

  //   // }
  // }
  logOut = () => {
    localStorage.removeItem("token");
    // location.reload();
    this.tokenHelperService.isLogin = false;
    window.location.href="http://localhost:4200/login"
  }
}
