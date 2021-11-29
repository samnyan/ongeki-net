import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpUpItemComponent} from './exp-up-item.component';

describe('ExpUpItemComponent', () => {
  let component: ExpUpItemComponent;
  let fixture: ComponentFixture<ExpUpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpUpItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpUpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
