import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinInputOverviewComponent } from './pin-input-overview.component';

describe('OverviewComponent', () => {
  let component: PinInputOverviewComponent;
  let fixture: ComponentFixture<PinInputOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinInputOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinInputOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
