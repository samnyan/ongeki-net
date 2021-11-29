import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MusicRankingDetailComponent} from './music-ranking-detail/music-ranking-detail.component';
import {BattlePointComponent} from './battle-point/battle-point.component';
import {RatingComponent} from './rating/rating.component';
import {TotalHiscoreComponent} from './total-hiscore/total-hiscore.component';
import {TotalPointComponent} from './total-point/total-point.component';
import {IntimateComponent} from './intimate/intimate.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'musicRankingDetail', component: MusicRankingDetailComponent},
  {path: 'battlePoint', component: BattlePointComponent},
  {path: 'rating', component: RatingComponent},
  {path: 'totalHiscore', component: TotalHiscoreComponent},
  {path: 'totalPoint', component: TotalPointComponent},
  {path: 'intimate', component: IntimateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule {
}
