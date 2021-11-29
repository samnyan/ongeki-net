import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginBonusStandardComponent} from './login-bonus-standard.component';

describe('LoginBonusStandardComponent', () => {
  let component: LoginBonusStandardComponent;
  let fixture: ComponentFixture<LoginBonusStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginBonusStandardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBonusStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
