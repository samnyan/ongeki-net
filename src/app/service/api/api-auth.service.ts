import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpParams } from '@angular/common/http';
import { JwtTokenResponse } from '../../model/Auth';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  constructor(private api: ApiService) {
  }

  public login(userName: string, password: string) {
    return this.api.post<JwtTokenResponse>(urls.login, null, { params: new HttpParams().append("userName", userName).append("password", password) })
  }

  public register(userName: string, password: string, accessCode: string, inviteCode: string) {
    return this.api.post<JwtTokenResponse>(urls.register, null,
      { params: new HttpParams().append("userName", userName).append("password", password).append("accessCode", accessCode).append("inviteCode", inviteCode) }
    )
  }
}

const urls = {
  login: 'auth/login',
  register: 'auth/register'
}
