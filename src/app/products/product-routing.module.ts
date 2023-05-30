import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../products/product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
    {path:'',component:ProductComponent},
    {path:'add/',component:ProductDetailsComponent},
    {path:'edit/:id',component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {

 }
