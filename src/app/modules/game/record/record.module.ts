import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RecordRoutingModule} from './record-routing.module';
import {StoryDetailComponent} from './story-detail/story-detail.component';
import {MissionListComponent} from './mission-list/mission-list.component';
import {MissionDetailComponent} from './mission-detail/mission-detail.component';
import {MissionCardBonusComponent} from './mission-card-bonus/mission-card-bonus.component';
import {MedalShopComponent} from './medal-shop/medal-shop.component';
import {PlaylogComponent} from './playlog/playlog.component';
import {PlaylogDetailComponent} from './playlog-detail/playlog-detail.component';
import {EventlogComponent} from './eventlog/eventlog.component';
import {EventlogRankingComponent} from './eventlog-ranking/eventlog-ranking.component';
import {EventlogTechComponent} from './eventlog-tech/eventlog-tech.component';
import {MusicGenreComponent} from './music-genre/music-genre.component';
import {MusicWordComponent} from './music-word/music-word.component';
import {MusicCharacterComponent} from './music-character/music-character.component';
import {MusicLevelComponent} from './music-level/music-level.component';
import {MusicMybestComponent} from './music-mybest/music-mybest.component';
import {MusicLatestComponent} from './music-latest/music-latest.component';
import {MusicTechCountComponent} from './music-tech-count/music-tech-count.component';
import {MusicScoreGenreComponent} from './music-score-genre/music-score-genre.component';
import {RegionComponent} from './region/region.component';
import {MusicDetailComponent} from './music-detail/music-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    StoryDetailComponent,
    MissionListComponent,
    MissionDetailComponent,
    MissionCardBonusComponent,
    MedalShopComponent,
    PlaylogComponent,
    PlaylogDetailComponent,
    EventlogComponent,
    EventlogRankingComponent,
    EventlogTechComponent,
    MusicGenreComponent,
    MusicWordComponent,
    MusicCharacterComponent,
    MusicLevelComponent,
    MusicMybestComponent,
    MusicLatestComponent,
    MusicTechCountComponent,
    MusicScoreGenreComponent,
    RegionComponent,
    MusicDetailComponent
  ],
  imports: [
    CommonModule,
    RecordRoutingModule
  ]
})
export class RecordModule {
}
