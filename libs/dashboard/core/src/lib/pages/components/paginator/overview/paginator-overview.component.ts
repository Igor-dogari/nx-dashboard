import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicPaginatorExampleComponent } from '@core';
import {
  ConfigurablePaginatorExampleComponent
} from '@core';
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
