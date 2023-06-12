import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AppConstants } from '../constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableFilter } from 'src/app/models/tableFilter';
@Injectable({
    providedIn: 'root'
})

export class PoductService {
    baseUrl: string = AppConstants.url + 'product/';
  prodId: number;
  constructor(private http: HttpClient) { }

   


    getProduct(tableFilter:TableFilter) {
      debugger
        return this.http.post<TableFilter>(this.baseUrl + 'getproduct',tableFilter);
    }
    getProductById(id: number) {
        return this.http.get<any>(this.baseUrl + 'getProductById/' + id);
    }
    saveProduct(product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrl + 'save',product);
    }
    uploadImages(formData:FormData):Observable<any>{
      return this.http.post<any>(this.baseUrl + 'saveImages',formData);
    }
     
      deleteProduct(id: number) {
        console.log(id);
        return this.http.get<Product>(this.baseUrl + 'deleteProduct/'+id);
      }
}
