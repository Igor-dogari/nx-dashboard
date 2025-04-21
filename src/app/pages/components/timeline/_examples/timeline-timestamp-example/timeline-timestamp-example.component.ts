import { Component } from '@angular/core';
import {
  AvatarComponent,
  TimelineAttributesComponent,
  TimelineComponent,
  TimelineDescriptionComponent,
  TimelineHeaderComponent,
  TimelineItemComponent,
  TimelineTimestampComponent,
  TimelineTitleComponent,
} from 'core';

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
