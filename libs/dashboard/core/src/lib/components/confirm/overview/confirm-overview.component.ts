import { Component } from '@angular/core';
import {
  BasicConfirmExampleComponent,
  ConfirmFormModalExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    imports: [
        PageComponent,
        PageContentDirective,
        PlaygroundComponent,
        BasicConfirmExampleComponent,
        ConfirmFormModalExampleComponent
    ],
    templateUrl: './confirm-overview.component.html',
    styleUrl: './confirm-overview.component.scss'
})
export class ConfirmOverviewComponent {

}
