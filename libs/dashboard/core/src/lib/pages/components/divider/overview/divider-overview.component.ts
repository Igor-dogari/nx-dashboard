import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicDividerExampleComponent } from '../_examples/basic-divider-example/basic-divider-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  DividerHorizontalAndVerticalExampleComponent
} from '../_examples/divider-horizontal-and-vertical-example/divider-horizontal-and-vertical-example.component';

@Component({
    imports: [
        PlaygroundComponent,
        BasicDividerExampleComponent,
        PageComponent,
        PageContentDirective,
        DividerHorizontalAndVerticalExampleComponent
    ],
    templateUrl: './divider-overview.component.html',
    styleUrl: './divider-overview.component.scss'
})
export class DividerOverviewComponent {

}
