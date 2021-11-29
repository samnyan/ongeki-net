import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IntimateUpItemComponent} from './intimate-up-item.component';

describe('IntimateUpItemComponent', () => {
  let component: IntimateUpItemComponent;
  let fixture: ComponentFixture<IntimateUpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntimateUpItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntimateUpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
