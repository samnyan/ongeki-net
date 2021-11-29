import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {MusicRankingDetailComponent} from './music-ranking-detail/music-ranking-detail.component';
import {BattlePointComponent} from './battle-point/battle-point.component';
import {RatingComponent} from './rating/rating.component';
import {TotalHiscoreComponent} from './total-hiscore/total-hiscore.component';
import {TotalPointComponent} from './total-point/total-point.component';
import {IntimateComponent} from './intimate/intimate.component';


@NgModule({
  declarations: [
    HomeComponent,
    MusicRankingDetailComponent,
    BattlePointComponent,
    RatingComponent,
    TotalHiscoreComponent,
    TotalPointComponent,
    IntimateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RankingModule {
}
