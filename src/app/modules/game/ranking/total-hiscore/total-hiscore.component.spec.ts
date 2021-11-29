import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TotalHiscoreComponent} from './total-hiscore.component';

describe('TotalHiscoreComponent', () => {
  let component: TotalHiscoreComponent;
  let fixture: ComponentFixture<TotalHiscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalHiscoreComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalHiscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
