import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  TimelineComponent,
  TimelineDescriptionComponent, TimelineHeaderComponent, TimelineItemComponent,
  TimelineTimestampComponent,
  TimelineTitleComponent
} from '@core/components';
import { TimelineItemIndicatorDirective } from '@core/directives';
import { AvatarComponent } from '@core/components';

@Component({
  selector: 'app-timeline-with-cutsom-indicator-example',
  imports: [
    MatIcon,
    AvatarComponent,
    TimelineItemIndicatorDirective,
    TimelineItemComponent,
    TimelineHeaderComponent,
    TimelineComponent,
    TimelineTimestampComponent,
    TimelineDescriptionComponent,
    TimelineTitleComponent,
  ],
  templateUrl: './timeline-with-cutsom-indicator-example.component.html',
  styleUrl: './timeline-with-cutsom-indicator-example.component.scss',
})
export class TimelineWithCutsomIndicatorExampleComponent {}
