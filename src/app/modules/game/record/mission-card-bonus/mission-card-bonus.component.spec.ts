import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MissionCardBonusComponent} from './mission-card-bonus.component';

describe('MissionCardBonusComponent', () => {
  let component: MissionCardBonusComponent;
  let fixture: ComponentFixture<MissionCardBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionCardBonusComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionCardBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
