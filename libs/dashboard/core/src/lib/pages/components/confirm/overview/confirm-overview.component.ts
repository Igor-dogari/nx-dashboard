import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { BasicConfirmExampleComponent } from '@core';
import {
  ConfirmFormModalExampleComponent
} from '@core';

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
