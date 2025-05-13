import { Component } from '@angular/core';
import { SkeletonLineComponent } from '../../../skeleton/skeleton-line/skeleton-line.component';
import { SkeletonBlockComponent } from '../../../skeleton/skeleton-block/skeleton-block.component';
import { SkeletonComponent } from '../../../skeleton/skeleton/skeleton.component';

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
