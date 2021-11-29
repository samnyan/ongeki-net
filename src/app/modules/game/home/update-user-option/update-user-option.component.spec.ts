import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateUserOptionComponent} from './update-user-option.component';

describe('UpdateUserOptionComponent', () => {
  let component: UpdateUserOptionComponent;
  let fixture: ComponentFixture<UpdateUserOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateUserOptionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
