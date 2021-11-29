import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GoodsCampaignComponent} from './goods-campaign.component';

describe('GoodsCampaignComponent', () => {
  let component: GoodsCampaignComponent;
  let fixture: ComponentFixture<GoodsCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoodsCampaignComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
