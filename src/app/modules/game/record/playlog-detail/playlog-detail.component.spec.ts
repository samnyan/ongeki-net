import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaylogDetailComponent} from './playlog-detail.component';

describe('PlaylogDetailComponent', () => {
  let component: PlaylogDetailComponent;
  let fixture: ComponentFixture<PlaylogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylogDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
