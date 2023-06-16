import { Component, Input, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { dataType } from 'src/app/common/Enum/dataType';
import { ListDataObj } from 'src/app/models/ListDataObj';
import { button } from 'src/app/models/buttons';
import { PoductService } from 'src/app/common/services/product.service';
import { Router } from '@angular/router';
import { ToolBar } from 'src/app/models/toolbar';
import { ListComponent } from 'src/app/common/list/list.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogueBoxComponent } from 'src/app/dialogue-box/dialogue-box.component';
import { MatDialog } from '@angular/material/dialog';
import { LoaderService } from 'src/app/common/services/loader';
import { TableFilter } from 'src/app/models/tableFilter';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @ViewChild('form') form: any;
  @ViewChild(ListComponent) grid: ListComponent;
  editMode: boolean = false;
  addMode: boolean = false;
  mode: boolean = false;
  dateFormate = AppConstants.dateFormat;
  pageIndex = 0;
  constructor(private productService: PoductService, private router: Router, readonly snackBar: MatSnackBar, public dialog: MatDialog, public loader: LoaderService) { }
  public editObj: Product = {
    id: 0,
    productName: "",
    manufrecturerName: "",
    productType: "",
    costPrice: 0,
    retailPrice: 0,
    categoryId: 0,
    manufrecturingDate: new Date(),
    expiryDate: new Date(),
    imageUrl: "",
    name: ""
  };
  listHeader: ListDataObj[] = [{
    columnName: 'Id',
    field: 'id',
    fieldType: dataType.string
  },
  {
    columnName: 'Product Name',
    field: 'productName',
    fieldType: dataType.string
  },
  {
    columnName: 'Manufracturer Name',
    field: 'manufrecturerName',
    fieldType: dataType.string
  },
  {
    columnName: 'Product Type',
    field: 'productType',
    fieldType: dataType.string
  },
  {
    columnName: 'Cost Price',
    field: 'costPrice',
    fieldType: dataType.string
  },
  {
    columnName: 'Retail Price',
    field: 'retailPrice',
    fieldType: dataType.string
  },
  {
    columnName: 'Satus',
    field: 'status',
    fieldType: dataType.string
  },
  {
    columnName: 'Manufrecturing Date',
    field: 'manufrecturingDate',
    fieldType: dataType.date
  },
  {
    columnName: 'Expiry Date',
    field: 'expiryDate',
    fieldType: dataType.date
  },
  {
    columnName: 'Image Url',
    field: 'imageUrl',
    fieldType: dataType.string
  },
  {
    columnName: 'Category Name',
    field: 'name',
    fieldType: dataType.string
  },
  ];


  button: button[] = [{
    name: "Edit",
    callBackFunction: (value: Product) => this.editCallBack(value),
    color: "primary"
  },
  {
    name: "Delete",
    callBackFunction: (value: Product) => this.deleteCallbackFunction(value),
    color: "warn"
  },
  ];
  toolbar: ToolBar = {
    title: "Product",
    btnArr: [] = [{
      name: "Add",
      callBackFunction: () => this.addCallBack(),
      color: "primary"
    }]
  };
  tableFilter: TableFilter
  dataCallBack = (tableFilter: TableFilter) => this.productService.getProduct(tableFilter);
  // {
  //   return this.productService.getProduct(tableFilter);
  // }
  addCallBack = (): void => {
    this.router.navigate(['product/add', '']);
  }
  editCallBack = (value: Product): void => {
    this.router.navigate(['product/edit', value.id]);
  }
  deleteCallbackFunction = (value: Product): void => {
    const dialogRef = this.dialog.open(DialogueBoxComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(value.id).subscribe({
          next: (value: any) => {
            this.snackBar.open("Deleted Succesfully", 'Close', {
              duration: 3000,
            });
            if (value) {
              this.grid.refresh();
            }
          },
        }
        );
      }
    });
  }

}

