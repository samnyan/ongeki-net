import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TotalPointComponent} from './total-point.component';

describe('TotalPointComponent', () => {
  let component: TotalPointComponent;
  let fixture: ComponentFixture<TotalPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalPointComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
