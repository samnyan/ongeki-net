import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OngekiContainerComponent} from './container/ongeki-container/ongeki-container.component';

const routes: Routes = [
  {
    path: 'login',
    component: OngekiContainerComponent,
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: OngekiContainerComponent,
    loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule),
    // canLoad: [AuthGuardService]
  },
  {
    path: 'aimeList',
    component: OngekiContainerComponent,
    loadChildren: () => import('./modules/aime-list/aime-list.module').then(m => m.AimeListModule),
    // canLoad: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
