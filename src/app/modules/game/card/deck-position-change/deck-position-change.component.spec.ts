import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeckPositionChangeComponent} from './deck-position-change.component';

describe('DeckPositionChangeComponent', () => {
  let component: DeckPositionChangeComponent;
  let fixture: ComponentFixture<DeckPositionChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeckPositionChangeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckPositionChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
