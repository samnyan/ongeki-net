import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicLevelComponent} from './music-level.component';

describe('MusicLevelComponent', () => {
  let component: MusicLevelComponent;
  let fixture: ComponentFixture<MusicLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicLevelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
