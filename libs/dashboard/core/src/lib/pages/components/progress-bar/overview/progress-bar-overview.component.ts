import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicProgressBarExampleComponent
} from '../_examples/basic-progress-bar-example/basic-progress-bar-example.component';
import {
  IntermediateProgressBarExampleComponent
} from '../_examples/intermediate-progress-bar-example/intermediate-progress-bar-example.component';
import {
  BufferProgressBarExampleComponent
} from '../_examples/buffer-progress-bar-example/buffer-progress-bar-example.component';
import {
  QueryProgressBarExampleComponent
} from '../_examples/query-progress-bar-example/query-progress-bar-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
