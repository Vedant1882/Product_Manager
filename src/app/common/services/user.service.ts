import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppConstants} from '../constants/app.constants'
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { UserLogin } from 'src/app/models/userLogin';
import { TableFilter } from 'src/app/models/tableFilter';
 
@Injectable({
    providedIn: 'root'
})

export class UserService {
    baseUrl:string=AppConstants.url+'user/' ; 
    constructor(private http: HttpClient) { }

    getUsers(tableFilter:TableFilter):Observable<any> {
        return this.http.post<TableFilter>(this.baseUrl + 'get',tableFilter);
    }
    saveUsers(user:Users):Observable<Users>{
        return this.http.post<Users>(this.baseUrl +'register',user);
    }
    loginUsers(userLogin:UserLogin):Observable<UserLogin>{
        return this.http.post<Users>(this.baseUrl +'login',userLogin);
    }
}
