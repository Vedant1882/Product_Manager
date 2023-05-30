import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { ListComponent } from '../common/list/list.component';
import { ProductModule } from '../products/product.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../common/material.module';
import { CategoryDetailsComponent } from './category-details/category-details.component';


console.warn("loading")
@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailsComponent,
    
  ],
  imports: [
  CategoryRoutingModule,
  ProductModule,
  CommonModule,
  FormsModule,
  MaterialModule
  ],
 

})
export class CategoryModule { }
