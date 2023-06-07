import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AppConstants } from '../constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class PoductService {
    baseUrl: string = AppConstants.url + 'product/';
  prodId: number;
  constructor(private http: HttpClient) { }

   


    getProduct() {
        return this.http.get<any>(this.baseUrl + 'getproduct');
    }
    getProductById(id: number) {
        return this.http.get<any>(this.baseUrl + 'getProductById/' + id);
      }
    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + 'save', product);
      }
      deleteProduct(id: number) {
        console.log(id);
        return this.http.get<Product>(this.baseUrl + 'deleteProduct/'+id);
      }
    // viewData(id: any) {

    //     this.product.forEach((element: Product) => {
    //         if (element.id == id) {
    //             Object.assign(this.editObj, element);
    //         }
    //     });
    //     return this.editObj;
    // }
    // editProduct(editObj: Product) {
    //     this.product.forEach((element: Product) => {
    //         if (element.id == this.editObj.id) {
    //             element.costPrice = this.editObj.costPrice;
    //             element.manufecturerName = this.editObj.manufecturerName;
    //             element.productName = this.editObj.productName;
    //             element.productType = this.editObj.productType;
    //             element.retailPrice = this.editObj.retailPrice;
    //             element.mfgDate = this.editObj.mfgDate;
    //             element.exprDate = this.editObj.exprDate;
    //             element.status = this.editObj.status;

    //         }
    //     });
    // }
    // addProduct(item: any) {
    //     this.product.forEach((element: Product) => {
    //         if (element.id > this.index) {
    //             this.index = element.id;
    //         }
    //     });
    //     item.id = this.index + 1;
    //     this.product.push(item);
    // }
}
