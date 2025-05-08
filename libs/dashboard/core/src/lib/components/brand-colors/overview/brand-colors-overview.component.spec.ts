import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandColorsOverviewComponent } from './brand-colors-overview.component';

describe('OverviewComponent', () => {
  let component: BrandColorsOverviewComponent;
  let fixture: ComponentFixture<BrandColorsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandColorsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandColorsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
