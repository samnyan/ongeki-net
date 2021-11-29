import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserFriendCodeComponent} from './user-friend-code.component';

describe('UserFriendCodeComponent', () => {
  let component: UserFriendCodeComponent;
  let fixture: ComponentFixture<UserFriendCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFriendCodeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFriendCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
