import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartOverviewComponent } from './line-chart-overview.component';

describe('OverviewComponent', () => {
  let component: LineChartOverviewComponent;
  let fixture: ComponentFixture<LineChartOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChartOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
