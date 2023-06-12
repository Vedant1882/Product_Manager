import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ListComponent } from 'src/app/common/list/list.component';
import { CategoryService } from 'src/app/common/services/category.service';
import { category } from 'src/app/models/category';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  @ViewChild('form') form: any;
  @ViewChild(ListComponent) grid: ListComponent;
  editMode: boolean = false;
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
 
  categoryId=0;
  constructor(private categoryService: CategoryService,private router:Router,private route: ActivatedRoute) {}
 

ngOnInit() {
  this.route.params.subscribe(params => {
    this.categoryId = params['id'];
  });
  if(Number(this.categoryId) > 0){
    this.categoryService.getCategoryById(this.categoryId).subscribe({
      next: (value: any) => {
        this.editObj.name = value.name;
        this.editObj.description=value.description;
        this.editObj.id=value.id;
        this.editMode=true;
      },
    })
  }
}

  save(item: category) {
      this.categoryService.saveCategory(item).subscribe();
      this.router.navigate(['/category']);
      this.grid.refresh()
  }
  routeTo(){
    this.router.navigate(['/category']);
  }
}
