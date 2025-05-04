import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicIncidentsExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  IncidentsShowHideDynamiclyExampleComponent
} from '@core/pages';

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
