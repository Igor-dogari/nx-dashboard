import { Component } from '@angular/core';
import {
  BasicProgressSpinnerExampleComponent,
  ConfigurableSpinnerExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  imports: [
    PlaygroundComponent,
    BasicProgressSpinnerExampleComponent,
    ConfigurableSpinnerExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './progress-spinner-overview.component.html',
  styleUrl: './progress-spinner-overview.component.scss'
})
export class ProgressSpinnerOverviewComponent {

}
