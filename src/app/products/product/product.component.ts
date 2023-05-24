import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']

})
export class ProductComponent {
   editMode: boolean = false;
   public editObj: Product = {
    id: 0,
    productName: "",
    manufecturerName: "",
    productType: "",
    costPrice: 0,
    retailPrice: 0
  };

  product: any = [{
    id: 1,
    productName: "First",
    manufecturerName: "Ashok",
    productType: "Abc",
    costPrice: 50,
    retailPrice: 90
  }, 
  {
    id: 2,
    productName: "Second",
    manufecturerName: "Vedant",
    productType: "Abc",
    costPrice: 60,
    retailPrice: 100
  },
  {
    id: 3,
    productName: "Third",
    manufecturerName: "Naman",
    productType: "Abc",
    costPrice: 60,
    retailPrice: 100
  }];

  addItem(newItem: any) {   
    this.product.forEach((element: Product) => {
      if(element.id == newItem.id){
        this.editObj = element;
        this.editMode = true;
      }
    });
    
    //this.product.push(newItem);
  }
  update() {   
      
    this.product.forEach((element: Product) => {
      if(element.id == this.editObj.id){
         element.costPrice = this.editObj.costPrice;
         element.manufecturerName = this.editObj.manufecturerName;
         element.productName = this.editObj.productName;
         element.productType =this.editObj.productType;
         element.retailPrice = this.editObj.retailPrice;

      }
    });
    
    //this.product.push(newItem);
  }
}
