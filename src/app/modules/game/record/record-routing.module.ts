import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StoryDetailComponent} from './story-detail/story-detail.component';
import {MissionListComponent} from './mission-list/mission-list.component';
import {MissionDetailComponent} from './mission-detail/mission-detail.component';
import {MissionCardBonusComponent} from './mission-card-bonus/mission-card-bonus.component';
import {MedalShopComponent} from './medal-shop/medal-shop.component';
import {PlaylogComponent} from './playlog/playlog.component';
import {PlaylogDetailComponent} from './playlog-detail/playlog-detail.component';
import {EventlogComponent} from './eventlog/eventlog.component';
import {EventlogRankingComponent} from './eventlog-ranking/eventlog-ranking.component';
import {EventlogTechComponent} from './eventlog-tech/eventlog-tech.component';
import {MusicGenreComponent} from './music-genre/music-genre.component';
import {RegionComponent} from './region/region.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'storyDetail', component: StoryDetailComponent},
  {path: 'missionList', component: MissionListComponent},
  {path: 'missionDetail', component: MissionDetailComponent},
  {path: 'missionCardBonus', component: MissionCardBonusComponent},
  {path: 'medalShop', component: MedalShopComponent},
  {path: 'playlog', component: PlaylogComponent},
  {path: 'playlogDetail', component: PlaylogDetailComponent},
  {path: 'eventlog', component: EventlogComponent},
  {path: 'eventlogRanking', component: EventlogRankingComponent},
  {path: 'eventlogTech', component: EventlogTechComponent},
  {path: 'musicGenre', component: MusicGenreComponent},
  {path: 'region', component: RegionComponent},
  // { path: 'congratulations', component: CongratulationsComponent },
  // {path: 'archiveRanking', component: ArchiveRankingComponent},
  // {path: 'userOption', component: UserOptionComponent},
  // {path: 'userOption/updateUserName', component: UpdateUserNameComponent},
  // { path: 'userOption/updateUserComment', component: UpdateUserCommentComponent },
  // { path: 'userOption/updateUserWebOption', component: UpdateUserWebOptionComponent },
  // {path: 'userOption/updateUserOption', component: UpdateUserOptionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordRoutingModule {
}
