import { Component, input, numberAttribute } from '@angular/core';
import { SkeletonBlockComponent } from '../../../skeleton/skeleton-block/skeleton-block.component';
import { SkeletonLineComponent } from '../../../skeleton/skeleton-line/skeleton-line.component';
import { SkeletonComponent } from '../../../skeleton/skeleton/skeleton.component';

@Component({
  selector: 'emr-dashboard-cards-skeleton',
  imports: [
    SkeletonBlockComponent,
    SkeletonLineComponent,
    SkeletonComponent
  ],
  templateUrl: './dashboard-cards-skeleton.component.html',
  styleUrl: './dashboard-cards-skeleton.component.css'
})
export class DashboardCardsSkeletonComponent {
  count = input(2, {
    transform: numberAttribute
  });
}
