import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicPaginatorExampleComponent } from '@core/pages';
import {
  ConfigurablePaginatorExampleComponent
} from '@core/pages';
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
