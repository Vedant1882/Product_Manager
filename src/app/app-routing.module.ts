import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  
  {path:'dashboard',component:DashboardComponent},
  {path:'product',loadChildren:()=>import('./products/product.module').then(m=>m.ProductModule)},
  {path:'category',loadChildren:()=>import('./categories/category.module').then(m=>m.CategoryModule)},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
