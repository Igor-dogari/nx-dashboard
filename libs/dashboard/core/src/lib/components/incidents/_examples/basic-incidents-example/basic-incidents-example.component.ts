import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  IncidentComponent,
  IncidentDetailsComponent,
  IncidentsBarComponent,
  IncidentsComponent,
  IncidentsDescriptionComponent,
  IncidentsListComponent,
  IncidentsTitleComponent,
  IncidentTitleComponent
} from '@core/components';
import { IncidentCloseDirective, IncidentIconDirective, IncidentsToggleIconDirective } from '@core/directives';

@Component({
  selector: 'app-basic-incidents-example',
  imports: [
    MatIcon,
    IncidentsTitleComponent,
    IncidentsDescriptionComponent,
    IncidentsToggleIconDirective,
    IncidentIconDirective,
    IncidentCloseDirective,
    IncidentTitleComponent,
    IncidentDetailsComponent,
    IncidentComponent,
    IncidentsListComponent,
    IncidentsBarComponent,
    IncidentsComponent,
  ],
  templateUrl: './basic-incidents-example.component.html',
  styleUrl: './basic-incidents-example.component.scss',
})
export class BasicIncidentsExampleComponent {
  incidents = [
    {
      title: 'Maintenance work on the DNS API',
      details: '1 minute ago',
    },
    {
      title: 'Maintenance work on the DNS API',
      details: '2 days ago',
    },
  ];
}
