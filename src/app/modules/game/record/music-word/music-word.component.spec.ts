import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicWordComponent} from './music-word.component';

describe('MusicWordComponent', () => {
  let component: MusicWordComponent;
  let fixture: ComponentFixture<MusicWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicWordComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
