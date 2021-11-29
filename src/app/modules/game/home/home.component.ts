import {Component, OnInit} from '@angular/core';
import {ApiOngekiService} from '../../../service/api/api-ongeki.service';
import {OngekiPlayerInfo} from '../../../model/Ongeki';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  playerInfo?: OngekiPlayerInfo;
  constructor(
    private api: ApiOngekiService
  ) {
  }

  ngOnInit(): void {
    this.api.playerInfo().subscribe(resp => {
      this.playerInfo = resp
    })
  }

}
