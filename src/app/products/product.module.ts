import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from '../common/list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



console.warn("loading")
@NgModule({
  declarations: [
    ProductComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductRoutingModule,
  
  ],


})
export class ProductModule { }
