import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ListComponent } from '@progress/kendo-angular-grid';
import { dataType } from 'src/app/common/Enum/dataType';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { UserService } from 'src/app/common/services/user.service';
import { DialogueBoxComponent } from 'src/app/dialogue-box/dialogue-box.component';
import { ListDataObj } from 'src/app/models/ListDataObj';
import { button } from 'src/app/models/buttons';
import { TableFilter } from 'src/app/models/tableFilter';
import { ToolBar } from 'src/app/models/toolbar';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @ViewChild('form') form: any;

  @ViewChild(ListComponent) grid: ListComponent;

  editMode: boolean = false;
  addMode: boolean = false;
  mode: boolean = false;
  dateFormate = AppConstants.dateFormat;
  category: any;
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

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog, readonly snackBar: MatSnackBar) { 
  }

  listHeader: ListDataObj[] = [{
    columnName: 'Id',
    field: 'id',
    fieldType: dataType.string
  },
  {
    columnName: 'First Name',
    field: 'firstName',
    fieldType: dataType.string
  },
  {
    columnName: 'Last Name',
    field: 'lastName',
    fieldType: dataType.string
  },
  {
    columnName: 'Email',
    field: 'email',
    fieldType: dataType.string
  },
  {
    columnName: 'Address',
    field: 'address',
    fieldType: dataType.string
  },
  {
    columnName: 'Phone Number',
    field: 'phoneNumber',
    fieldType: dataType.string
  },
  ];
  buttons: button[] = [{
    name: "Edit",
    callBackFunction: (value: Users) => this.editCallBack(value),
    color: "primary"
  },
  {
    name: "Delete",
    callBackFunction: (value: Users) => this.deleteCallbackFunction(value),
    color: "warn"
  },
  ];
  toolbar: ToolBar = {
    title: "Users",
    btnArr: [] = [{
      name: "Add",
      callBackFunction: () => this.addCallBack(),
      color: "primary"
    }
    ]
  };


  ngOnInit(): void {
  }
  
  tableFilter: TableFilter
  dataCallBack = (tableFilter: TableFilter) => this.userService.getUsers(tableFilter);
  addCallBack = (): void => {
    this.router.navigate(['user/add', '']);
  }

  editCallBack = (value: Users): void => {
    this.router.navigate(['user/edit', value.id]);
  }

  deleteCallbackFunction = (value: Users): void => {
    const dialogRef = this.dialog.open(DialogueBoxComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(value.id).subscribe({
          next: (value: any) => {
            this.snackBar.open("Deleted Succesfully", 'Close', {
              duration: 3000,
            });
            if (value) {
              //this.grid.refresh();
            }
          },
        }
        );
      }
    });
    this.ngOnInit();




  }
}
