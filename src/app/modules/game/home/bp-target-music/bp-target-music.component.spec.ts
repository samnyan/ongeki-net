import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BpTargetMusicComponent} from './bp-target-music.component';

describe('BpTargetMusicComponent', () => {
  let component: BpTargetMusicComponent;
  let fixture: ComponentFixture<BpTargetMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BpTargetMusicComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpTargetMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
