import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListComponent } from '@progress/kendo-angular-grid';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { UserService } from 'src/app/common/services/user.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @ViewChild('form') form: any;
  @ViewChild(ListComponent) grid: ListComponent;
  
  passwordRegex=AppConstants.passwordValidation;
  editMode: boolean = false;
  public editObj: Users = {

    createdAt: new Date(),
    createdById: 0,
    updatedAt: new Date(),
    updatedById: 0,
    deletedAt: new Date(),
    deletedById: 0,
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: 0,
    address: "",

  };
 
  userId=0;
  constructor(private userService: UserService,private router:Router,private route: ActivatedRoute) {}
 

ngOnInit() {
  this.route.params.subscribe(params => {
    this.userId = params['id'];
  });
  if(Number(this.userId) > 0){
    this.userService.getUserById(this.userId).subscribe({
      next: (value: any) => {
        this.editObj.firstName = value.firstName;
        this.editObj.lastName=value.lastName;
        this.editObj.id=value.id;
        this.editObj.email=value.email;
        this.editObj.phoneNumber=value.phoneNumber;
        this.editObj.address=value.address
        this.editMode=true;
        
      },
    })
  }
}
save() {
  this.userService.saveUsers(this.editObj).subscribe();
  this.router.navigate(['/user']);
  //this.grid.refresh();
}
routeTo(){
  this.router.navigate(['/user']);
}
}
