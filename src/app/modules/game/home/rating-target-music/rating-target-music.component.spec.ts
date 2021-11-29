import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RatingTargetMusicComponent} from './rating-target-music.component';

describe('RatingTargetMusicComponent', () => {
  let component: RatingTargetMusicComponent;
  let fixture: ComponentFixture<RatingTargetMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingTargetMusicComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingTargetMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
