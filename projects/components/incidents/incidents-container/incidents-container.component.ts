import { Component, computed, inject } from '@angular/core';
import { IncidentsComponent } from '../incidents/incidents.component';
import { MatIcon } from '@angular/material/icon';
import { IncidentsTitleComponent } from '@elementar-ui/components/incidents';
import { IncidentDetailsComponent } from '@elementar-ui/components/incidents';
import { IncidentsBarComponent } from '@elementar-ui/components/incidents';
import { IncidentsDescriptionComponent } from '@elementar-ui/components/incidents';
import { IncidentsToggleIconDirective } from '../incidents-toggle-icon.directive';
import { IncidentTitleComponent } from '@elementar-ui/components/incidents';
import { IncidentCloseDirective } from '../incident-close.directive';
import { IncidentComponent } from '../incident/incident.component';
import { IncidentsListComponent } from '@elementar-ui/components/incidents';
import { IncidentsStore } from '../../../../src/app/store';

@Component({
  selector: 'emr-incidents-container,emr-incidents-global',
  exportAs: 'emrIncidentsGlobal',
  imports: [
    IncidentsComponent,
    MatIcon,
    IncidentsTitleComponent,
    IncidentDetailsComponent,
    IncidentsBarComponent,
    IncidentsDescriptionComponent,
    IncidentsToggleIconDirective,
    IncidentTitleComponent,
    IncidentsListComponent,
    IncidentCloseDirective,
    IncidentComponent,
  ],
  templateUrl: './incidents-container.component.html',
  styleUrl: './incidents-container.component.scss',
  host: {
    class: 'emr-incidents-global',
    '[class.is-active]': 'hasIncidents()',
  },
})
export class IncidentsContainerComponent {
  protected _incidentsStore = inject(IncidentsStore);

  hasIncidents = computed<boolean>(() => {
    return this._incidentsStore.incidents().length > 0;
  });
  title = computed(() => {
    return this._incidentsStore.title();
  });
  description = computed(() => {
    return this._incidentsStore.description();
  });
  incidents = computed(() => {
    return this._incidentsStore.incidents();
  });
}
