import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserFriendCodeComponent} from './user-friend-code/user-friend-code.component';
import {SearchComponent} from './search/search.component';
import {MatchingComponent} from './matching/matching.component';
import {InviteComponent} from './invite/invite.component';
import {AcceptComponent} from './accept/accept.component';
import {FriendLevelVsComponent} from './friend-level-vs/friend-level-vs.component';
import {FriendGenreVsComponent} from './friend-genre-vs/friend-genre-vs.component';
import {FriendDetailComponent} from './friend-detail/friend-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'userFriendCode', component: UserFriendCodeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'matching', component: MatchingComponent},
  {path: 'invite', component: InviteComponent},
  {path: 'accept', component: AcceptComponent},
  {path: 'friendGenreVs', component: FriendGenreVsComponent},
  {path: 'friendLevelVs', component: FriendLevelVsComponent},
  {path: 'friendDetail', component: FriendDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule {
}
