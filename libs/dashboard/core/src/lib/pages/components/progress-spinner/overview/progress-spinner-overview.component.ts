import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicProgressSpinnerExampleComponent
} from '@core';
import {
  ConfigurableSpinnerExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
