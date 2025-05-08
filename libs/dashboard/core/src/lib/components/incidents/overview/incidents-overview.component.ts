import { Component } from '@angular/core';
import {
  BasicIncidentsExampleComponent,
  IncidentsShowHideDynamiclyExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  imports: [
    PlaygroundComponent,
    BasicIncidentsExampleComponent,
    PageComponent,
    PageContentDirective,
    IncidentsShowHideDynamiclyExampleComponent
  ],
    templateUrl: './incidents-overview.component.html',
    styleUrl: './incidents-overview.component.scss'
})
export class IncidentsOverviewComponent {

}
