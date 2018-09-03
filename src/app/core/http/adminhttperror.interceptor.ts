import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
  HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError } from 'rxjs'; // don't forget the imports
import { catchError } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AdminHttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(catchError( (err: any, caught: Observable<HttpEvent<any>>) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            localStorage.removeItem('admin_token');
            this.router.navigateByUrl('admin/login');
          }
        }
        return throwError(err.error.message);
      }));
  }
}
