import { Component } from '@angular/core';
import {
  BasicPaginatorExampleComponent,
  ConfigurablePaginatorExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
