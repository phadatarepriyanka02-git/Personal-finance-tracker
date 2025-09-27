import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const dummyToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwidXNlcm5hbWUiOiJQcml5YW5rYSIsImV4cCI6MTgwMDAwMDAwMH0.dummysignature1234567890';

  const cloned = request.clone({
    setHeaders: {
      Authorization: `Bearer ${dummyToken}`
    }
  });

  return next.handle(cloned);
  }
}
