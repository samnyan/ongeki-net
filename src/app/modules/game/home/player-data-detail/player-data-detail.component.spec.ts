import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerDataDetailComponent} from './player-data-detail.component';

describe('PlayerDataDetailComponent', () => {
  let component: PlayerDataDetailComponent;
  let fixture: ComponentFixture<PlayerDataDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerDataDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
