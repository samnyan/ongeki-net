import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaylogComponent} from './playlog.component';

describe('PlaylogComponent', () => {
  let component: PlaylogComponent;
  let fixture: ComponentFixture<PlaylogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
