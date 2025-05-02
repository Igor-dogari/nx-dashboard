import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicFilterBuilderExampleComponent
} from '../_examples/basic-filter-builder-example/basic-filter-builder-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicFilterBuilderExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './filter-builder-overview.component.html',
    styleUrl: './filter-builder-overview.component.scss'
})
export class FilterBuilderOverviewComponent {

}
