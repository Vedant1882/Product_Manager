import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppConstants} from '../constants/app.constants'
 
@Injectable({
    providedIn: 'root'
})

export class UserService {
    baseUrl:string=AppConstants.url+'user/' ; 

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<any>(this.baseUrl +'get');
    }
}
