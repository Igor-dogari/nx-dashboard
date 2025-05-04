import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicDividerExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  DividerHorizontalAndVerticalExampleComponent
} from '@core/pages';

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
