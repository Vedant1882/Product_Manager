import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HelperModule } from '../common/helper.module';
import { UploadImagesComponent } from '../upload-images/upload-images.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    UploadImagesComponent
  ],
  imports: [
    FormsModule,
    ProductRoutingModule,
    HelperModule
  ],
  exports: []


})
export class ProductModule { }

