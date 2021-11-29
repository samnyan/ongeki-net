import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginBonusComponent} from './login-bonus.component';

describe('LoginBonusComponent', () => {
  let component: LoginBonusComponent;
  let fixture: ComponentFixture<LoginBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginBonusComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
