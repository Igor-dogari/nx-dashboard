import { Component } from '@angular/core';
import {
  TimelineAttributesComponent,
  TimelineComponent,
  TimelineDescriptionComponent,
  TimelineHeaderComponent,
  TimelineItemComponent,
  TimelineTimestampComponent,
  TimelineTitleComponent,
} from '@core/components';
import { AvatarComponent } from '@core/components';

@Component({
  selector: 'app-timeline-timestamp-example',
  imports: [
    AvatarComponent,
    TimelineTimestampComponent,
    TimelineTitleComponent,
    TimelineDescriptionComponent,
    TimelineAttributesComponent,
    TimelineItemComponent,
    TimelineHeaderComponent,
    TimelineComponent,
  ],
  templateUrl: './timeline-timestamp-example.component.html',
  styleUrl: './timeline-timestamp-example.component.scss',
})
export class TimelineTimestampExampleComponent {}
