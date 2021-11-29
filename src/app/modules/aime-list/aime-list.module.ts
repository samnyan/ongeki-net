import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AimeListRoutingModule} from './aime-list-routing.module';
import {AimeListComponent} from './aime-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AimeListComponent
  ],
  imports: [
    CommonModule,
    AimeListRoutingModule,
    FormsModule
  ]
})
export class AimeListModule {
}
