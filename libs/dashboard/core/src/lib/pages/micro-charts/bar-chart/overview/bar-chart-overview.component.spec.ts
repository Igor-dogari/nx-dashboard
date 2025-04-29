import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartOverviewComponent } from './bar-chart-overview.component';

describe('OverviewComponent', () => {
  let component: BarChartOverviewComponent;
  let fixture: ComponentFixture<BarChartOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
