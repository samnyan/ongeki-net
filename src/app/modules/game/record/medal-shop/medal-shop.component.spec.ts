import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MedalShopComponent} from './medal-shop.component';

describe('MedalShopComponent', () => {
  let component: MedalShopComponent;
  let fixture: ComponentFixture<MedalShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedalShopComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
