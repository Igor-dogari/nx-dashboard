import { Component } from '@angular/core';
import { SkeletonLineComponent } from '../../skeleton/skeleton-line/skeleton-line.component';
import { SkeletonBlockComponent } from '../../skeleton/skeleton-block/skeleton-block.component';
import { SkeletonComponent } from '../../skeleton/skeleton/skeleton.component';

@Component({
  selector: 'emr-widget-skeleton',
  exportAs: 'emrWidgetSkeleton',
  imports: [
    SkeletonLineComponent,
    SkeletonBlockComponent,
    SkeletonComponent
  ],
  templateUrl: './widget-skeleton.component.html',
  styleUrl: './widget-skeleton.component.scss',
  host: {
    'class': 'emr-widget-skeleton',
  }
})
export class WidgetSkeletonComponent {

}
