import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { dataType } from 'src/app/common/Enum/dataType';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { CategoryService } from 'src/app/common/services/category.service';
import { ListDataObj } from 'src/app/models/ListDataObj';
import { button } from 'src/app/models/buttons';
import { category } from 'src/app/models/category';
import { ToolBar } from 'src/app/models/toolbar';

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
  
  public editObj: category = {
    id: 0,
    categoryName: "",
    description: "",
  };
  public addObj: category = {
    id: 0,
    categoryName: "",
    description: "",
  };
  constructor(private categoryService: CategoryService,private router: Router) {}

  listHeader: ListDataObj[] = [{
    columnName: 'Id',
    field: 'id',
    fieldType: dataType.string
  },
  {
    columnName: 'Category Name',
    field: 'categoryName',
    fieldType: dataType.string
  },
  {
    columnName: 'Discription',
    field: 'description',
    fieldType: dataType.string
  },
  ];
  buttons:button[]=[{
    name:"Edit",
    callBackFunction: (value: category)  => this.editCallBack(value),
    color:"primary"
  },
  {
    name:"Delete",
    callBackFunction:(value: category) => this.deleteCallbackFunction(value),
    color:"warn"
  },
];
toolbar:ToolBar={
  title:"Category" ,
  btnArr:[]=[{
    name:"Add",
    callBackFunction: ()  => this.addCallBack(),
    color:"primary"
  }
  ]};

   
addCallBack = (): void => {
  this.router.navigate(['category/add', '']);
}
  category:category[]=this.categoryService.getCategory();

  editCallBack = (value:category): void => {
    debugger;
    this.router.navigate(['category/edit', value.id]);
  }

  deleteCallbackFunction = (value: category): void => {
    debugger;
    this.category.forEach((element: category) => {
      if (element.id == value.id) {
        debugger;
        const index = this.category.indexOf(element);
        //console.log(index);
        if (index !== -1) {
          this.category.splice(index, 1);
        }
      }
    });
    }

}


