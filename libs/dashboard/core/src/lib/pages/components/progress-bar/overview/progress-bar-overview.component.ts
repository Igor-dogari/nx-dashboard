import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicProgressBarExampleComponent
} from '@core/pages';
import {
  IntermediateProgressBarExampleComponent
} from '@core/pages';
import {
  BufferProgressBarExampleComponent
} from '@core/pages';
import {
  QueryProgressBarExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicProgressBarExampleComponent,
        IntermediateProgressBarExampleComponent,
        BufferProgressBarExampleComponent,
        QueryProgressBarExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './progress-bar-overview.component.html',
    styleUrl: './progress-bar-overview.component.scss'
})
export class ProgressBarOverviewComponent {

}
