import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from 'src/app/app.component';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { UserService } from 'src/app/common/services/user.service';
import { Users } from 'src/app/models/users';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailRegex = AppConstants.emailValidation;
  phoneRegex = AppConstants.phonenumberValidation;
  passwordRegex=AppConstants.passwordValidation;

  constructor(private userService: UserService,readonly snackBar: MatSnackBar) { }
  public usersObj: any = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: null,
    address: "",
    createdAt: new Date(),
    createdById: 0,
    updatedAt: new Date(),
    updatedById: 0,
    deletedAt: new Date(),
    deletedById: 0
  }
  saveUser(item: Users) {
    this.userService.saveUsers(item).subscribe({
      next: (value: any) => {
        this.snackBar.open(value.Message, 'Close' , {
          duration: 3000,
          panelClass: ['green-snackbar']
      } );
      }
    }
      
    );

  }
}
