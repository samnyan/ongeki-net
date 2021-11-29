import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicLatestComponent} from './music-latest.component';

describe('MusicLatestComponent', () => {
  let component: MusicLatestComponent;
  let fixture: ComponentFixture<MusicLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicLatestComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
