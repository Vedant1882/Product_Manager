import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/common/services/category.service';
import { category } from 'src/app/models/category';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  @ViewChild('form') form: any;
  editMode: boolean = false;
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
  categoryId=0;
  constructor(private categoryService: CategoryService,private router:Router,private route: ActivatedRoute) {}
 

ngOnInit() {
  this.route.params.subscribe(params => {
    this.categoryId = params['id'];
   console.log(this.categoryId);
  });
  if(Number(this.categoryId) > 0){
    this.editObj=this.categoryService.viewData(this.categoryId);
    this.editMode=true;
  }
}

  save(item: any) {
    if (this.editObj.id == 0 || this.editObj.id == null) {
      this.categoryService.addCategory(item);
      this.router.navigate(['/category']);
    }
    else {
      if (this.form.valid) {
        this.categoryService.editCategory(this.editObj);
        this.router.navigate(['/category']);
      }
    }
    
  }
}
