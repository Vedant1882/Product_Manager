import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { CategoryRoutingModule } from './category-routing.module';


console.warn("loading")
@NgModule({
  declarations: [
    CategoryComponent,
    
  ],
  imports: [
  CategoryRoutingModule
  ],
 

})
export class CategoryModule { }
