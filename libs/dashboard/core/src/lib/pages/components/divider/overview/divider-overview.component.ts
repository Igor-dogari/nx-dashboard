import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicDividerExampleComponent } from '../_examples/basic-divider-example/basic-divider-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
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
