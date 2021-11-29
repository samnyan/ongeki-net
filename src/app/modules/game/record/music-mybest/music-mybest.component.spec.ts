import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicMybestComponent} from './music-mybest.component';

describe('MusicMybestComponent', () => {
  let component: MusicMybestComponent;
  let fixture: ComponentFixture<MusicMybestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicMybestComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicMybestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
