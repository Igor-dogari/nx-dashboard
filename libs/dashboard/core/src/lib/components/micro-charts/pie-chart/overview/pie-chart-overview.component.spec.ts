import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartOverviewComponent } from './pie-chart-overview.component';

describe('OverviewComponent', () => {
  let component: PieChartOverviewComponent;
  let fixture: ComponentFixture<PieChartOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
