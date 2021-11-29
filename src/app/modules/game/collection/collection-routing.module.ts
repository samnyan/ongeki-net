import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IconComponent} from './icon/icon.component';
import {TrophyComponent} from './trophy/trophy.component';
import {PlateComponent} from './plate/plate.component';
import {KaikaticketComponent} from './kaikaticket/kaikaticket.component';
import {StarticketComponent} from './starticket/starticket.component';
import {StarticketDetailComponent} from './starticket-detail/starticket-detail.component';
import {ExpUpItemComponent} from './exp-up-item/exp-up-item.component';
import {IntimateUpItemComponent} from './intimate-up-item/intimate-up-item.component';

const routes: Routes = [
  {path: '', component: IconComponent},
  {path: 'trophy', component: TrophyComponent},
  {path: 'plate', component: PlateComponent},
  {path: 'kaikaticket', component: KaikaticketComponent},
  {path: 'expUpItem', component: ExpUpItemComponent},
  {path: 'intimateUpItem', component: IntimateUpItemComponent},
  {path: 'starticket', component: StarticketComponent},
  {path: 'starticketDetail', component: StarticketDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule {
}
