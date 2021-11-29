import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FriendLevelVsComponent} from './friend-level-vs.component';

describe('FriendLevelVsComponent', () => {
  let component: FriendLevelVsComponent;
  let fixture: ComponentFixture<FriendLevelVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendLevelVsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendLevelVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
