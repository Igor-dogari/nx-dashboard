import { Component } from '@angular/core';
import {
  BasicTimelineExampleComponent, PageComponent,
  PlaygroundComponent,
  TimelineTimestampExampleComponent, TimelineWithCutsomIndicatorExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
  templateUrl: './timeline-overview.component.html',
  styleUrl: './timeline-overview.component.scss'
})
export class TimelineOverviewComponent {

}
