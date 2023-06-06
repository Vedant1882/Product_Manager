import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenHelperService } from 'src/app/common/services/tokenHelperService';
import { UserService } from 'src/app/common/services/user.service';
import { UserLogin } from 'src/app/models/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token: string = ""
  loginObj: UserLogin = {
    email: "",
    password: "",
  }

  constructor(private userService: UserService, readonly snackBar: MatSnackBar, private router: Router,
    private tokenHelperService: TokenHelperService) { }

  login(value: any) {
    this.userService.loginUsers(value).subscribe({
      next: (value: any) => {
        this.token = value.token;
        if (this.token != "") {
          this.tokenHelperService.isLogin = true;
          localStorage.setItem("token", this.token);
          this.router.navigate(['/dashboard']);
        }
        else {
          this.snackBar.open("Incorrect credentials", 'Close', {
            duration: 3000,
          });
        }
      },
    })
  }
}
