import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicPaginatorExampleComponent } from '../_examples/basic-paginator-example/basic-paginator-example.component';
import {
  ConfigurablePaginatorExampleComponent
} from '../_examples/configurable-paginator-example/configurable-paginator-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicPaginatorExampleComponent,
        ConfigurablePaginatorExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
