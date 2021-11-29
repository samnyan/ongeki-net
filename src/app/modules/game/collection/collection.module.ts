import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollectionRoutingModule} from './collection-routing.module';
import {IconComponent} from './icon/icon.component';
import {TrophyComponent} from './trophy/trophy.component';
import {PlateComponent} from './plate/plate.component';
import {KaikaticketComponent} from './kaikaticket/kaikaticket.component';
import {ExpUpItemComponent} from './exp-up-item/exp-up-item.component';
import {IntimateUpItemComponent} from './intimate-up-item/intimate-up-item.component';
import {StarticketComponent} from './starticket/starticket.component';
import {StarticketDetailComponent} from './starticket-detail/starticket-detail.component';


@NgModule({
  declarations: [
    IconComponent,
    TrophyComponent,
    PlateComponent,
    KaikaticketComponent,
    ExpUpItemComponent,
    IntimateUpItemComponent,
    StarticketComponent,
    StarticketDetailComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ]
})
export class CollectionModule {
}
