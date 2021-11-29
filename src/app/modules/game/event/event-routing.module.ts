import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EventChapterDetailComponent} from './event-chapter-detail/event-chapter-detail.component';
import {RewardComponent} from './reward/reward.component';
import {CardBonusComponent} from './card-bonus/card-bonus.component';
import {TechChallengeComponent} from './tech-challenge/tech-challenge.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'eventChapterDetail', component: EventChapterDetailComponent},
  {path: 'reward', component: RewardComponent},
  {path: 'cardBonus', component: CardBonusComponent},
  {path: 'techChallenge', component: TechChallengeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
}
