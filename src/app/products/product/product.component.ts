import { Component, Input, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { AppConstants } from 'src/app/common/constants/app.constants';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']

})
export class ProductComponent {
  @ViewChild('form') form:any;
   editMode: boolean = false;
   dateFormate=AppConstants.dateFormat;
   public editObj: Product = {
    id: 0,
    productName: "",
    manufecturerName: "",
    productType: "",
    costPrice: 0,
    retailPrice: 0,
    status:"",
    mfgDate:  new Date(),
    exprDate:new Date(),
    imgUrl:""
  };
  

  product: any = [{
    id: 1,
    productName: "First",
    manufecturerName: "Ashok",
    productType: "Abc",
    costPrice: 50,
    retailPrice: 90,
    status:"Active",
    mfgDate:  new Date(),
    exprDate:new Date(),
    imgUrl:""
  }, 
  {
    id: 2,
    productName: "Second",
    manufecturerName: "Vedant",
    productType: "Abc",
    costPrice: 60,
    retailPrice: 100,
    status:"Inactive",
    mfgDate:  new Date(),
    exprDate:new Date(),
    imgUrl:""
  },
  {
    id: 3,
    productName: "Third",
    manufecturerName: "Naman",
    productType: "Abc",
    costPrice: 60,
    retailPrice: 100,
    status:"Active",
    mfgDate:  new Date(),
    exprDate:new Date(),
    imgUrl:""
  }];

  addItem(newItem: any) {   
    this.product.forEach((element: Product) => {
      if(element.id == newItem.id){
        Object.assign(this.editObj,element);
        this.editMode = true;
      }
    });
    //this.product.push(newItem);
  }
  update() {   
      if(this.form.valid){
        this.product.forEach((element: Product) => {
          if(element.id == this.editObj.id ){
             element.costPrice = this.editObj.costPrice;
             element.manufecturerName = this.editObj.manufecturerName;
             element.productName = this.editObj.productName;
             element.productType =this.editObj.productType;
             element.retailPrice = this.editObj.retailPrice;
            element.mfgDate=this.editObj.mfgDate;
            element.exprDate=this.editObj.exprDate;
            element.status=this.editObj.status;
            this.editMode = false;
          }
        });
      }
    //this.product.push(newItem);
  }
}
