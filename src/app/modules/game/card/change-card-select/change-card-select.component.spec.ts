import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeCardSelectComponent} from './change-card-select.component';

describe('ChangeCardSelectComponent', () => {
  let component: ChangeCardSelectComponent;
  let fixture: ComponentFixture<ChangeCardSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeCardSelectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
