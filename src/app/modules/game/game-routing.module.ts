import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameComponent} from './game.component';

const routes: Routes = [
  {
    path: '', component: GameComponent, children: [
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'record', loadChildren: () => import('./record/record.module').then(m => m.RecordModule)},
      {path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule)},
      {path: 'collection', loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule)},
      {path: 'character', loadChildren: () => import('./character/character.module').then(m => m.CharacterModule)},
      {path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule)},
      {path: 'friend', loadChildren: () => import('./friend/friend.module').then(m => m.FriendModule)},
      {path: 'ranking', loadChildren: () => import('./ranking/ranking.module').then(m => m.RankingModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
