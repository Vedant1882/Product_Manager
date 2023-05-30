import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from '../common/list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../common/material.module';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ProductComponent,
    ListComponent,
    ProductDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductRoutingModule,
    MaterialModule
  ],
  exports: [ListComponent]


})
export class ProductModule { }

