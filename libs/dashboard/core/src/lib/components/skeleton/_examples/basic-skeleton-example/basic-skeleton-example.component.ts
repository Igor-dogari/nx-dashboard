import { Component } from '@angular/core';
import {
  SkeletonBlockComponent,
  SkeletonCircleComponent,
  SkeletonComponent,
  SkeletonLineComponent
} from '@core/components';

@Component({
  selector: 'app-basic-skeleton-example',
  imports: [
    SkeletonCircleComponent,
    SkeletonLineComponent,
    SkeletonBlockComponent,
    SkeletonComponent
  ],
  templateUrl: './basic-skeleton-example.component.html',
  styleUrl: './basic-skeleton-example.component.scss'
})
export class BasicSkeletonExampleComponent {

}
