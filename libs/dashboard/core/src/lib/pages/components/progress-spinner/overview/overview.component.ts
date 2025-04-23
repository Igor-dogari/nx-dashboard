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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
