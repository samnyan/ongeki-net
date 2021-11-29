import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterOtherComponent} from './character-other.component';

describe('CharacterOtherComponent', () => {
  let component: CharacterOtherComponent;
  let fixture: ComponentFixture<CharacterOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterOtherComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
