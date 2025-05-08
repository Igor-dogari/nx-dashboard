import { Component } from '@angular/core';
import {
  BasicProgressBarExampleComponent, BufferProgressBarExampleComponent,
  IntermediateProgressBarExampleComponent, PageComponent,
  PlaygroundComponent, QueryProgressBarExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
