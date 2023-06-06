import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { dataType } from 'src/app/common/Enum/dataType';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { CategoryService } from 'src/app/common/services/category.service';
import { DialogueBoxComponent } from 'src/app/dialogue-box/dialogue-box.component';
import { ListDataObj } from 'src/app/models/ListDataObj';
import { button } from 'src/app/models/buttons';
import { category } from 'src/app/models/category';
import { ToolBar } from 'src/app/models/toolbar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  @ViewChild('form') form: any;
  editMode: boolean = false;
  addMode: boolean = false;
  mode: boolean = false;
  dateFormate = AppConstants.dateFormat;
  category: category[];
  public editObj: category = {

    createdAt: new Date(),
    createdById: 0,
    updatedAt: new Date(),
    updatedById: 0,
    deletedAt: new Date(),
    deletedById: 0,
    id: 0,
    name: "",
    description: ""

  };

  constructor(private categoryService: CategoryService, private router: Router, public dialog: MatDialog, readonly snackBar: MatSnackBar) { }

  listHeader: ListDataObj[] = [{
    columnName: 'Id',
    field: 'id',
    fieldType: dataType.string
  },
  {
    columnName: 'Category Name',
    field: 'name',
    fieldType: dataType.string
  },
  {
    columnName: 'Discription',
    field: 'description',
    fieldType: dataType.string
  },
  ];
  buttons: button[] = [{
    name: "Edit",
    callBackFunction: (value: category) => this.editCallBack(value),
    color: "primary"
  },
  {
    name: "Delete",
    callBackFunction: (value: category) => this.deleteCallbackFunction(value),
    color: "warn"
  },
  ];
  toolbar: ToolBar = {
    title: "Category",
    btnArr: [] = [{
      name: "Add",
      callBackFunction: () => this.addCallBack(),
      color: "primary"
    }
    ]
  };

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe({
      next: (value: any) => {
        debugger;
        this.category = value;
      },
      error(msg) {
        alert(msg);
      }
    });
    console.log(this.category)
  }
  addCallBack = (): void => {
    this.router.navigate(['category/add', '']);
  }


  editCallBack = (value: category): void => {
    this.router.navigate(['category/edit', value.id]);
  }

  deleteCallbackFunction = (value: category): void => {
    const dialogRef = this.dialog.open(DialogueBoxComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.deleteCategory(value.id).subscribe({
          next: (value: any) => {
              this.snackBar.open("Deleted Succesfully", 'Close', {
                duration: 3000,
              });
          },
        }
        );
      }
    });
    this.router.navigate(['category','']);
  }
}


