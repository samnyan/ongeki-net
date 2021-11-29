import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KaikaticketComponent} from './kaikaticket.component';

describe('KaikaticketComponent', () => {
  let component: KaikaticketComponent;
  let fixture: ComponentFixture<KaikaticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KaikaticketComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaikaticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
