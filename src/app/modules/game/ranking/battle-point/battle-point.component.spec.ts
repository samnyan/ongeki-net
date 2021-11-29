import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BattlePointComponent} from './battle-point.component';

describe('BattlePointComponent', () => {
  let component: BattlePointComponent;
  let fixture: ComponentFixture<BattlePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BattlePointComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
