import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {EventRoutingModule} from './event-routing.module';
import {EventChapterDetailComponent} from './event-chapter-detail/event-chapter-detail.component';
import {RewardComponent} from './reward/reward.component';
import {CardBonusComponent} from './card-bonus/card-bonus.component';
import {TechChallengeComponent} from './tech-challenge/tech-challenge.component';


@NgModule({
  declarations: [
    HomeComponent,
    EventChapterDetailComponent,
    RewardComponent,
    CardBonusComponent,
    TechChallengeComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule {
}
