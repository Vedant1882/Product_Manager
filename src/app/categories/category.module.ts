import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { ListComponent } from '../common/list/list.component';
import { ProductModule } from '../products/product.module';


console.warn("loading")
@NgModule({
  declarations: [
    CategoryComponent,
    
  ],
  imports: [
  CategoryRoutingModule,
  ProductModule
  ],
 

})
export class CategoryModule { }
