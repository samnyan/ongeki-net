import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AimeListComponent} from './aime-list.component';

const routes: Routes = [{path: '', component: AimeListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AimeListRoutingModule {
}
