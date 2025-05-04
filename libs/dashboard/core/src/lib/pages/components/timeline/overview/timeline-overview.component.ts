import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicTimelineExampleComponent } from '@core';
import {
  TimelineTimestampExampleComponent
} from '@core';
import {
  TimelineWithCutsomIndicatorExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
