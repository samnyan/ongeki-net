import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventlogRankingComponent} from './eventlog-ranking.component';

describe('EventlogRankingComponent', () => {
  let component: EventlogRankingComponent;
  let fixture: ComponentFixture<EventlogRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventlogRankingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlogRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
