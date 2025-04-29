import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicFilterBuilderExampleComponent
} from '../_examples/basic-filter-builder-example/basic-filter-builder-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
