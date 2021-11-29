import {Observable, throwError} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Response} from '../model/Response';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  intercept(request: HttpRequest<Response<any>>, next: HttpHandler): Observable<HttpEvent<Response<any>>> {
    return next.handle(request).pipe(map(resp => {
      if (resp instanceof HttpResponse) {
        if (!environment.production) {
          console.log("[RESP]", resp);
        }
        return resp.clone({body: resp.body.data});
      } else {
        return resp;
      }

    }), catchError(err => {
      let errorMessage: string;
      if (err.status !== undefined && err.status === 0) {
        errorMessage = 'Connection Timeout';
      } else {
        if (err.status === 401) {
          this.authenticationService.logout();
          location.reload();
        }
        errorMessage = err.error ? err.error.message : err.status + ' ' + err.statusText;
      }
      return throwError(errorMessage);
    }));
  }

}
