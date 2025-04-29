import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicProgressSpinnerExampleComponent
} from '../_examples/basic-progress-spinner-example/basic-progress-spinner-example.component';
import {
  ConfigurableSpinnerExampleComponent
} from '../_examples/configurable-spinner-example/configurable-spinner-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
