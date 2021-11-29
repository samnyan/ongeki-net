import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TechChallengeComponent} from './tech-challenge.component';

describe('TechChallengeComponent', () => {
  let component: TechChallengeComponent;
  let fixture: ComponentFixture<TechChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechChallengeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
