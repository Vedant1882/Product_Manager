import { Injectable } from '@angular/core';
import { category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor() { }
 index:number=0;
  private category:category[]=[{
    id: 1,
    categoryName: "First Category",
    description: "This is description",
   
  },{
    id: 2,
    categoryName: "Second Category",
    description: "This is description",
   
  },{
    id: 3,
    categoryName: "Third Category",
    description: "This is description",
   
  }];
  private editObj: category = {
    id: 0,
    categoryName: "",
    description: "",
  };
i:number=3;

  getCategory(){
    return this.category;
  }
  addCategory(item:any){
    this.category.forEach((element: category) => {
      if (element.id > this.index) {
          this.index = element.id;
      }
  });
  item.id = this.index + 1;
    this.category.push(item);
  }
  viewData(id:any){
  
    this.category.forEach((element: category) => {
      if (element.id == id) {
        Object.assign(this.editObj, element);
      }
    });
    return this.editObj;
  }
  editCategory(editObj:category){
    this.category.forEach((element: category) => {
            if (element.id == this.editObj.id) {
              element.categoryName = this.editObj.categoryName;
              element.description = this.editObj.description;
             
            }
          });
  }
}
