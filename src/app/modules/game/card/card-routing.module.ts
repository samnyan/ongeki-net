import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CardDetailComponent} from './card-detail/card-detail.component';
import {CardListComponent} from './card-list/card-list.component';
import {DeckComponent} from './deck/deck.component';
import {DeckPositionChangeComponent} from './deck-position-change/deck-position-change.component';
import {ChangeCardSelectComponent} from './change-card-select/change-card-select.component';
import {CardmakerComponent} from './cardmaker/cardmaker.component';
import {GachaDetailComponent} from './gacha-detail/gacha-detail.component';
import {TrainingComponent} from './training/training.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cardDetail', component: CardDetailComponent},
  {path: 'cardList', component: CardListComponent},
  {path: 'deck', component: DeckComponent},
  {path: 'deckPositionChange', component: DeckPositionChangeComponent},
  {path: 'changeCardSelect', component: ChangeCardSelectComponent},
  {path: 'cardmaker', component: CardmakerComponent},
  {path: 'gachaDetail', component: GachaDetailComponent},
  {path: 'training', component: TrainingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule {
}
