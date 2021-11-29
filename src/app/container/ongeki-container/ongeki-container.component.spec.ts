import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngekiContainerComponent } from './ongeki-container.component';

describe('OngekiContainerComponent', () => {
  let component: OngekiContainerComponent;
  let fixture: ComponentFixture<OngekiContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngekiContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngekiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
