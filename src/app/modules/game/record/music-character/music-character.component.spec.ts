import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicCharacterComponent} from './music-character.component';

describe('MusicCharacterComponent', () => {
  let component: MusicCharacterComponent;
  let fixture: ComponentFixture<MusicCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicCharacterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
