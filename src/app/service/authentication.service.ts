import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {ApiAuthService} from './api/api-auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUser: Observable<User | null>;
  private currentUserSubject: BehaviorSubject<User | null>;

  constructor(private api: ApiAuthService) {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(userName: string, password: string) {
    return this.api.login(userName, password)
      .pipe(
        map(
          resp => {
            if (resp && resp.token) {
              const user = new User(resp.token, resp.username, resp.roles);
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
            } else {
              return null;
            }
          }
        )
      );
  }

  register(userName: string, password: string, accessCode: string, inviteCode: string) {
    return this.api.register(userName, password, accessCode, inviteCode)
      .pipe(
        map(
          resp => {
            if (resp && resp.token) {
              const user = new User(resp.token, resp.username, resp.roles);
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
            } else {
              return null;
            }
          }
        )
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}

export class User {
  token: string;
  username: string;
  roles: Role[];


  constructor(token: string, username: string, roles: Role[]) {
    this.token = token;
    this.username = username;
    this.roles = roles;
  }
}

export class Role {
  name: string;
  authority: string;

  constructor(name: string, authority: string) {
    this.name = name;
    this.authority = authority;
  }
}
