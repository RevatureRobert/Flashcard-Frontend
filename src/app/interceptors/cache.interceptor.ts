import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // change to not equal once bugs are settled
    if (request.method !== 'GET') {
      return next.handle(request);
    }
    const storageKey = JSON.stringify(request);
    let cachedInformation: any = localStorage.getItem(storageKey);
    if (cachedInformation) {
      cachedInformation = new HttpResponse(JSON.parse(cachedInformation)).clone();
      return of(cachedInformation);
    } else {
      return next.handle(request).pipe(
        tap((res) => {
          if (res instanceof HttpResponse) {
            localStorage.setItem(storageKey, JSON.stringify(res));
          }
        })
      );
    }
  }
}
