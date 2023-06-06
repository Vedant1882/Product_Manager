import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    isByfergetState : boolean = false;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
     this.isByfergetState = req.url.includes('login') || req.url.includes('register');
     if(!this.isByfergetState){
        const userToken = localStorage.getItem("token");
        const modifiedReq = req.clone({ 
          headers: req.headers.set('Authorization', `Bearer ${userToken}`),
        });
        return next.handle(modifiedReq);
     }
     return next.handle(req);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];