import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

constructor() {
}

intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

     return next.handle(request)
           .pipe(
                 map(res => {
                    return res
                 }),
                 catchError((error: HttpErrorResponse) => {
                    let errorMsg = '';
                    if (error.error instanceof ErrorEvent) {
                       errorMsg = `Error: ${error.error.message}`;
                    } else {
                       errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                    }
                    return throwError(errorMsg);
                 })
           )
}
}
