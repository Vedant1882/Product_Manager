import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppConstants} from '../constants/app.constants'
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { UserLogin } from 'src/app/models/userLogin';
 
@Injectable({
    providedIn: 'root'
})

export class UserService {
    baseUrl:string=AppConstants.url+'user/' ; 
    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<any>(this.baseUrl +'get');
    }
    saveUsers(user:Users):Observable<Users>{
        return this.http.post<Users>(this.baseUrl +'register',user);
    }
    loginUsers(userLogin:UserLogin):Observable<UserLogin>{
        return this.http.post<Users>(this.baseUrl +'login',userLogin);
    }
}
