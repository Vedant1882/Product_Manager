import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenHelperService } from './common/services/tokenHelperService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectManager';
  id=0;
  constructor(private router:Router,private route: ActivatedRoute,public tokenHelperService:TokenHelperService) {}
  token:any="";
  ngOnInit() {
    this.token=localStorage.getItem("token");
  }
  isLogin(): boolean{
    if(this.token==""){
      return false;
    }
    else{
      return this.tokenHelperService.isValidTokenExist(this.token);

    }
  }
}
