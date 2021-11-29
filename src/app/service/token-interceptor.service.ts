import {AuthenticationService} from './authentication.service';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService {

    constructor(private authenticationService: AuthenticationService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            const clonedRequest = request.clone(
              {headers: request.headers.set('Authorization', `Bearer ${currentUser.token}`)}
            );
            return next.handle(clonedRequest);
        }
        return next.handle(request);
    }

}
