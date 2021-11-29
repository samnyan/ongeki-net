import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAimeService {

  constructor(private api: ApiService) {
  }

  public aimeList() {
    return this.api.get<any[]>(urls.aimeList);
  }

  public setMaster(userId: number) {
    return this.api.post<string>(urls.setMasterCard, null, {params: new HttpParams().append("userId", userId)})
  }

  public linkCard(playerId: number, accessCode: string) {
    return this.api.post<string>(urls.linkCard, null, {params: new HttpParams().append("userId", playerId).append("accessCode", accessCode)})
  }

  public unLinkCard(playerId: number, accessCode: string) {
    return this.api.post<string>(urls.unLinkCard, null, {params: new HttpParams().append("userId", playerId).append("accessCode", accessCode)})
  }

  public bindAime(accessCode: string) {
    return this.api.post<string>(urls.bindAime, null, {params: new HttpParams().append("accessCode", accessCode)})
  }

  public unBindAime(playerId: number) {
    return this.api.post<string>(urls.unBindAime, null, {params: new HttpParams().append("userId", playerId)})
  }
}

const urls = {
  aimeList: 'aime/deluxe/list',
  setMasterCard: 'aime/deluxe/set',
  linkCard: 'aime/deluxe/card/link',
  unLinkCard: 'aime/deluxe/card/unlink',
  bindAime: 'aime/bind',
  unBindAime: 'aime/unbind',
}
