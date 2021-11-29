import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicScoreGenreComponent} from './music-score-genre.component';

describe('MusicScoreGenreComponent', () => {
  let component: MusicScoreGenreComponent;
  let fixture: ComponentFixture<MusicScoreGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicScoreGenreComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicScoreGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
