import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule } from '@angular/forms';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { HelperModule } from '../common/helper.module';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CategoryRoutingModule,
    FormsModule,
    HelperModule
  ],
})
export class CategoryModule { }
