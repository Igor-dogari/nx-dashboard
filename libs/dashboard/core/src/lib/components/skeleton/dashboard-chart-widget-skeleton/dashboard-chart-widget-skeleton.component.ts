import { Component } from '@angular/core';
import { SkeletonBlockComponent, SkeletonComponent, SkeletonLineComponent } from '@core/components';

@Component({
  selector: 'emr-dashboard-chart-widget-skeleton',
  imports: [
    SkeletonLineComponent,
    SkeletonBlockComponent,
    SkeletonComponent
  ],
  templateUrl: './dashboard-chart-widget-skeleton.component.html',
  styleUrl: './dashboard-chart-widget-skeleton.component.css'
})
export class DashboardChartWidgetSkeletonComponent {

}
