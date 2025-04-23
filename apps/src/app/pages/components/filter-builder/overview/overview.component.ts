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
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
