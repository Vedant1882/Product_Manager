import { Injectable } from '@angular/core';
import { category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { AppConstants } from '../constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableFilter } from 'src/app/models/tableFilter';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  baseUrl: string = AppConstants.url + 'category/';
  catId: number;
  constructor(private http: HttpClient) { }

  getCategory(): Observable<category>{
    return this.http.get<any>(this.baseUrl + 'getCategory');
  }
  getCategoryTable(tableFilter:TableFilter){
    return this.http.post<TableFilter>(this.baseUrl + 'getCategorytable',tableFilter);
  }
  getCategoryById(id: number) {
    return this.http.get<any>(this.baseUrl + 'getCategoryById/' + id);
  }
  saveCategory(category: category): Observable<category> {
    return this.http.post<category>(this.baseUrl + 'save', category);
  }
  deleteCategory(id: number) {
    return this.http.get<category>(this.baseUrl + 'deleteCategory/'+id);
  }
}
