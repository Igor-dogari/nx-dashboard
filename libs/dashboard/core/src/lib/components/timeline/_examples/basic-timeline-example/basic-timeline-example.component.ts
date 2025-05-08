import { Component } from '@angular/core';
import {
  TimelineAttributesComponent,
  TimelineComponent,
  TimelineDescriptionComponent,
  TimelineHeaderComponent,
  TimelineItemComponent,
  TimelineTitleComponent,
} from '@core/components';
import { AvatarComponent } from '@core/components';

@Component({
  selector: 'app-basic-timeline-example',
  imports: [
    AvatarComponent,
    TimelineDescriptionComponent,
    TimelineAttributesComponent,
    TimelineTitleComponent,
    TimelineItemComponent,
    TimelineHeaderComponent,
    TimelineComponent,
  ],
  templateUrl: './basic-timeline-example.component.html',
  styleUrl: './basic-timeline-example.component.scss',
})
export class BasicTimelineExampleComponent {}
