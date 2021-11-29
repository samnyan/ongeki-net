import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SerialcodeComponent} from './serialcode.component';

describe('SerialcodeComponent', () => {
  let component: SerialcodeComponent;
  let fixture: ComponentFixture<SerialcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerialcodeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
