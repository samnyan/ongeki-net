import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StarticketDetailComponent} from './starticket-detail.component';

describe('StarticketDetailComponent', () => {
  let component: StarticketDetailComponent;
  let fixture: ComponentFixture<StarticketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarticketDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarticketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
