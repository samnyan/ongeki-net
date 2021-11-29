import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {PageResponse} from '../../model/Response';
import {OngekiPlayerInfo} from '../../model/Ongeki';

@Injectable({
  providedIn: 'root'
})
export class ApiOngekiService {

  constructor(private api: ApiService) {
  }

  public playerInfo() {
    return this.api.get<OngekiPlayerInfo>(urls.playerInfo);
  }

}

const urls = {
  playerInfo: 'ongeki/playerInfo',
}
