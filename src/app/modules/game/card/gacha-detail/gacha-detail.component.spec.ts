import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GachaDetailComponent} from './gacha-detail.component';

describe('GachaDetailComponent', () => {
  let component: GachaDetailComponent;
  let fixture: ComponentFixture<GachaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GachaDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GachaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
