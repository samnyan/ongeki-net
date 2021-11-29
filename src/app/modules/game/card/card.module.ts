import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardRoutingModule} from './card-routing.module';
import {HomeComponent} from './home/home.component';
import {CardDetailComponent} from './card-detail/card-detail.component';
import {CardListComponent} from './card-list/card-list.component';
import {DeckComponent} from './deck/deck.component';
import {DeckPositionChangeComponent} from './deck-position-change/deck-position-change.component';
import {ChangeCardSelectComponent} from './change-card-select/change-card-select.component';
import {CardmakerComponent} from './cardmaker/cardmaker.component';
import {GachaDetailComponent} from './gacha-detail/gacha-detail.component';
import {TrainingComponent} from './training/training.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardDetailComponent,
    CardListComponent,
    DeckComponent,
    DeckPositionChangeComponent,
    ChangeCardSelectComponent,
    CardmakerComponent,
    GachaDetailComponent,
    TrainingComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule {
}
