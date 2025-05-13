import { Component } from '@angular/core';
import { SkeletonBlockComponent } from '../../../skeleton/skeleton-block/skeleton-block.component';
import { SkeletonLineComponent } from '../../../skeleton/skeleton-line/skeleton-line.component';
import { SkeletonComponent } from '../../../skeleton/skeleton/skeleton.component';

@Component({
  selector: 'emr-dashboard-stats-widget-skeleton',
  imports: [
    SkeletonBlockComponent,
    SkeletonLineComponent,
    SkeletonComponent
  ],
  templateUrl: './dashboard-stats-widget-skeleton.component.html',
  styleUrl: './dashboard-stats-widget-skeleton.component.css'
})
export class DashboardStatsWidgetSkeletonComponent {

}
