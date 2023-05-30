import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
    {path:'',component:CategoryComponent},
    {path:'add/',component:CategoryDetailsComponent},
    {path:'edit/:id',component:CategoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
