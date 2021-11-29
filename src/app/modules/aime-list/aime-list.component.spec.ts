import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AimeListComponent} from './aime-list.component';

describe('AimeListComponent', () => {
  let component: AimeListComponent;
  let fixture: ComponentFixture<AimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AimeListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
