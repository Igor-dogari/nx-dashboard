import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInputOverviewComponent } from './phone-input-overview.component';

describe('OverviewComponent', () => {
  let component: PhoneInputOverviewComponent;
  let fixture: ComponentFixture<PhoneInputOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneInputOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneInputOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
