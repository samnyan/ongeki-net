import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginBonusSpecialComponent} from './login-bonus-special.component';

describe('LoginBonusSpecialComponent', () => {
  let component: LoginBonusSpecialComponent;
  let fixture: ComponentFixture<LoginBonusSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginBonusSpecialComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBonusSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
