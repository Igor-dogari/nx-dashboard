import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicTimelineExampleComponent } from '../_examples/basic-timeline-example/basic-timeline-example.component';
import {
  TimelineTimestampExampleComponent
} from '../_examples/timeline-timestamp-example/timeline-timestamp-example.component';
import {
  TimelineWithCutsomIndicatorExampleComponent
} from '../_examples/timeline-with-cutsom-indicator-example/timeline-with-cutsom-indicator-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicTimelineExampleComponent,
    TimelineTimestampExampleComponent,
    TimelineWithCutsomIndicatorExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
