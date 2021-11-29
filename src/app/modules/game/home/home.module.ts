import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {PlayerDataDetailComponent} from './player-data-detail/player-data-detail.component';
import {BpTargetMusicComponent} from './bp-target-music/bp-target-music.component';
import {RatingTargetMusicComponent} from './rating-target-music/rating-target-music.component';
import {UserOptionComponent} from './user-option/user-option.component';
import {UpdateUserNameComponent} from './update-user-name/update-user-name.component';
import {UpdateUserCommentComponent} from './update-user-comment/update-user-comment.component';
import {UpdateUserOptionComponent} from './update-user-option/update-user-option.component';
import {GoodsCampaignComponent} from './goods-campaign/goods-campaign.component';
import {LoginBonusSpecialComponent} from './login-bonus-special/login-bonus-special.component';
import {LoginBonusComponent} from './login-bonus/login-bonus.component';
import {LoginBonusStandardComponent} from './login-bonus-standard/login-bonus-standard.component';
import {ActivityComponent} from './activity/activity.component';
import {PresentComponent} from './present/present.component';
import {SerialcodeComponent} from './serialcode/serialcode.component';
import {SerialcodeErrorComponent} from './serialcode-error/serialcode-error.component';


@NgModule({
  declarations: [
    HomeComponent,
    PlayerDataDetailComponent,
    BpTargetMusicComponent,
    RatingTargetMusicComponent,
    UserOptionComponent,
    UpdateUserNameComponent,
    UpdateUserCommentComponent,
    UpdateUserOptionComponent,
    GoodsCampaignComponent,
    LoginBonusSpecialComponent,
    LoginBonusComponent,
    LoginBonusStandardComponent,
    ActivityComponent,
    PresentComponent,
    SerialcodeComponent,
    SerialcodeErrorComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
