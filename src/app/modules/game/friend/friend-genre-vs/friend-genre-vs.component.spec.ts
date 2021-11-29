import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FriendGenreVsComponent} from './friend-genre-vs.component';

describe('FriendGenreVsComponent', () => {
  let component: FriendGenreVsComponent;
  let fixture: ComponentFixture<FriendGenreVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendGenreVsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendGenreVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
