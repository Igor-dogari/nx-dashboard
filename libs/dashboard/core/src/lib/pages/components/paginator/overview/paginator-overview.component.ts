import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicPaginatorExampleComponent } from '../_examples/basic-paginator-example/basic-paginator-example.component';
import {
  ConfigurablePaginatorExampleComponent
} from '../_examples/configurable-paginator-example/configurable-paginator-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicPaginatorExampleComponent,
        ConfigurablePaginatorExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './paginator-overview.component.html',
    styleUrl: './paginator-overview.component.scss'
})
export class PaginatorOverviewComponent {

}
