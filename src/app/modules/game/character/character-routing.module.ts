import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {CharacterOtherComponent} from './character-other/character-other.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'characterDetail', component: CharacterDetailComponent},
  {path: 'characterOther', component: CharacterOtherComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {
}
