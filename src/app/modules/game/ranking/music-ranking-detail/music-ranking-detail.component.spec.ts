import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicRankingDetailComponent} from './music-ranking-detail.component';

describe('MusicRankingDetailComponent', () => {
  let component: MusicRankingDetailComponent;
  let fixture: ComponentFixture<MusicRankingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicRankingDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicRankingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
