import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateUserCommentComponent} from './update-user-comment.component';

describe('UpdateUserCommentComponent', () => {
  let component: UpdateUserCommentComponent;
  let fixture: ComponentFixture<UpdateUserCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateUserCommentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
