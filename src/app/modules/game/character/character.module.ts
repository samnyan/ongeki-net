import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CharacterRoutingModule} from './character-routing.module';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {CharacterOtherComponent} from './character-other/character-other.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharacterDetailComponent,
    CharacterOtherComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule {
}
