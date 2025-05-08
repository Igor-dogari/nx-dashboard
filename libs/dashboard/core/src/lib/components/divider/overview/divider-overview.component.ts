import { Component } from '@angular/core';
import {
  BasicDividerExampleComponent,
  DividerHorizontalAndVerticalExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
