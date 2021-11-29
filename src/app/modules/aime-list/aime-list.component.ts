import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiAimeService} from '../../service/api/api-aime.service';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-aime-list',
  templateUrl: './aime-list.component.html',
  styleUrls: ['./aime-list.component.scss']
})
export class AimeListComponent implements OnInit {

  playerInfoList?: any[] = undefined;
  isBind = false;
  accessCode = '';

  constructor(
    private auth: AuthenticationService,
    private api: ApiAimeService,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.aimeList().subscribe(resp => {
      this.playerInfoList = resp;
    })
  }

  setCardAndLogin(id: number) {
    this.route.navigate(['home']);
    // this.api.setMaster(id).subscribe(() => {
    // })
  }

}
