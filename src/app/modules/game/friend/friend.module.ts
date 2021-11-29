import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {FriendRoutingModule} from './friend-routing.module';
import {UserFriendCodeComponent} from './user-friend-code/user-friend-code.component';
import {SearchComponent} from './search/search.component';
import {MatchingComponent} from './matching/matching.component';
import {InviteComponent} from './invite/invite.component';
import {AcceptComponent} from './accept/accept.component';
import {FriendGenreVsComponent} from './friend-genre-vs/friend-genre-vs.component';
import {FriendLevelVsComponent} from './friend-level-vs/friend-level-vs.component';
import {FriendDetailComponent} from './friend-detail/friend-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserFriendCodeComponent,
    SearchComponent,
    MatchingComponent,
    InviteComponent,
    AcceptComponent,
    FriendGenreVsComponent,
    FriendLevelVsComponent,
    FriendDetailComponent
  ],
  imports: [
    CommonModule,
    FriendRoutingModule
  ]
})
export class FriendModule {
}
