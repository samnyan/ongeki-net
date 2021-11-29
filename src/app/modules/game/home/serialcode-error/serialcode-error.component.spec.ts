import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SerialcodeErrorComponent} from './serialcode-error.component';

describe('SerialcodeErrorComponent', () => {
  let component: SerialcodeErrorComponent;
  let fixture: ComponentFixture<SerialcodeErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerialcodeErrorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialcodeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
