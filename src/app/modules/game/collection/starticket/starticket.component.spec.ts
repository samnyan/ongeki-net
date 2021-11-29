import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StarticketComponent} from './starticket.component';

describe('StarticketComponent', () => {
  let component: StarticketComponent;
  let fixture: ComponentFixture<StarticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarticketComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
