import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventChapterDetailComponent} from './event-chapter-detail.component';

describe('EventChapterDetailComponent', () => {
  let component: EventChapterDetailComponent;
  let fixture: ComponentFixture<EventChapterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventChapterDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventChapterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
