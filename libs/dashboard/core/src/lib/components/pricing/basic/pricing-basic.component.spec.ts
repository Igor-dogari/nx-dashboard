import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingBasicComponent } from './pricing-basic.component';

describe('BasicComponent', () => {
  let component: PricingBasicComponent;
  let fixture: ComponentFixture<PricingBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
