import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventlogTechComponent} from './eventlog-tech.component';

describe('EventlogTechComponent', () => {
  let component: EventlogTechComponent;
  let fixture: ComponentFixture<EventlogTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventlogTechComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlogTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
