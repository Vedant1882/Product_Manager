import { Component, Input, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { dataType } from 'src/app/common/Enum/dataType';
import { ListDataObj } from 'src/app/models/ListDataObj';
import { button } from 'src/app/models/buttons';
import { PoductService} from 'src/app/common/services/product.service';
import { Router } from '@angular/router';
import { ToolBar } from 'src/app/models/toolbar';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @ViewChild('form') form: any;
  editMode: boolean = false;
  addMode: boolean = false;
  mode: boolean = false;
  dateFormate = AppConstants.dateFormat;
  constructor(private productService: PoductService,private router: Router) {}
  public editObj: Product = {
    id: 0,
    productName: "",
    manufecturerName: "",
    productType: "",
    costPrice: 0,
    retailPrice: 0,
    status: "",
    mfgDate: new Date(),
    exprDate: new Date(),
    imgUrl: ""
  };
  public addObj: Product = {
    id: 0,
    productName: "",
    manufecturerName: "",
    productType: "",
    costPrice: 0,
    retailPrice: 0,
    status: "",
    mfgDate: new Date(),
    exprDate: new Date(),
    imgUrl: ""
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
    field: 'manufecturerName',
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
    field: 'mfgDate',
    fieldType: dataType.date
  },
  {
    columnName: 'Expiry Date',
    field: 'exprDate',
    fieldType: dataType.date
  },
  {
    columnName: 'Image Url',
    field: 'imgUrl',
    fieldType: dataType.string
  },
  ];
  product:any[]=this.productService.getProduct();
 

  button:button[]=[{
    name:"Edit",
    callBackFunction: (value: Product)  => this.editCallBack(value),
    color:"primary"
  },
  {
    name:"Delete",
    callBackFunction:(value: Product) => this.deleteCallbackFunction(value),
    color:"warn"
  },
];
toolbar:ToolBar={
  title:"Product" ,
  btnArr:[]=[{
    name:"Add",
    callBackFunction: ()  => this.addCallBack(),
    color:"primary"
  }]
};

addCallBack = (): void => {
  this.router.navigate(['product/add', '']);
}
editCallBack = (value:Product): void => {
  this.router.navigate(['product/edit', value.id]);
}
deleteCallbackFunction = (value: Product): void => {
  debugger;
  this.product.forEach((element: Product) => {
    if (element.id == value.id) {
      debugger;
      const index = this.product.indexOf(element);
      //console.log(index);
      if (index !== -1) {
        this.product.splice(index, 1);
      }
    }
  });
  }
  addItem(newItem: any) {
    this.product.forEach((element: Product) => {
      if (element.id == newItem.id) {
        Object.assign(this.editObj, element);
        this.editMode = true;
        this.mode = true;
      }
    });
  }
  deleteItem(newItem: any) {
    debugger;
    this.product.forEach((element: Product) => {
      if (element.id == newItem) {
        const index = this.product.indexOf(element);
        console.log(index);
        if (index !== -1) {
          this.product.splice(index, 1);
          console.log('Deleted Obj' + element.id + ' ' + element.productName)
        }
      }
    });
    this.mode = false;
  }
  addProduct() {
    console.log('add event emitted.');

    Object.assign(this.editObj, this.addObj);
    this.editMode = false;
    this.mode = true;
  }

  save(item: any) {
    if (this.editObj.id == 0 || this.editObj.id == null) {
      console.log(item)
      this.product.push(item);
      this.addMode = false;
      console.log('add event emitted.');
    }
    else {
      if (this.form.valid) {
        this.product.forEach((element: Product) => {
          if (element.id == this.editObj.id) {
            element.costPrice = this.editObj.costPrice;
            element.manufecturerName = this.editObj.manufecturerName;
            element.productName = this.editObj.productName;
            element.productType = this.editObj.productType;
            element.retailPrice = this.editObj.retailPrice;
            element.mfgDate = this.editObj.mfgDate;
            element.exprDate = this.editObj.exprDate;
            element.status = this.editObj.status;
            this.editMode = false;
          }
        });
      }
    }
    this.mode = false;
  }
  
}

