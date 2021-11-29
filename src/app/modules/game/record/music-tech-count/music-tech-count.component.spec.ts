import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicTechCountComponent} from './music-tech-count.component';

describe('MusicTechCountComponent', () => {
  let component: MusicTechCountComponent;
  let fixture: ComponentFixture<MusicTechCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicTechCountComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicTechCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
