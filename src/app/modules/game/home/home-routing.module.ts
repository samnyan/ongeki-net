import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {PlayerDataDetailComponent} from './player-data-detail/player-data-detail.component';
import {UserOptionComponent} from './user-option/user-option.component';
import {UpdateUserNameComponent} from './update-user-name/update-user-name.component';
import {UpdateUserCommentComponent} from './update-user-comment/update-user-comment.component';
import {UpdateUserOptionComponent} from './update-user-option/update-user-option.component';
import {GoodsCampaignComponent} from './goods-campaign/goods-campaign.component';
import {ActivityComponent} from './activity/activity.component';
import {BpTargetMusicComponent} from './bp-target-music/bp-target-music.component';
import {LoginBonusComponent} from './login-bonus/login-bonus.component';
import {LoginBonusSpecialComponent} from './login-bonus-special/login-bonus-special.component';
import {LoginBonusStandardComponent} from './login-bonus-standard/login-bonus-standard.component';
import {PresentComponent} from './present/present.component';
import {RatingTargetMusicComponent} from './rating-target-music/rating-target-music.component';
import {SerialcodeComponent} from './serialcode/serialcode.component';
import {SerialcodeErrorComponent} from './serialcode-error/serialcode-error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'playerDataDetail', component: PlayerDataDetailComponent},
  {path: 'userOption', component: UserOptionComponent},
  {path: 'userOption/updateUserName', component: UpdateUserNameComponent},
  {path: 'userOption/updateUserComment', component: UpdateUserCommentComponent},
  {path: 'userOption/updateUserOption', component: UpdateUserOptionComponent},
  {path: 'goodsCampaign', component: GoodsCampaignComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'bpTargetMusic', component: BpTargetMusicComponent},
  {path: 'loginBonus', component: LoginBonusComponent},
  {path: 'loginBonusSpecial', component: LoginBonusSpecialComponent},
  {path: 'loginBonusStandard', component: LoginBonusStandardComponent},
  {path: 'present', component: PresentComponent},
  {path: 'ratingTargetMusic', component: RatingTargetMusicComponent},
  {path: 'serialcode', component: SerialcodeComponent},
  {path: 'serialcodeError', component: SerialcodeErrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
