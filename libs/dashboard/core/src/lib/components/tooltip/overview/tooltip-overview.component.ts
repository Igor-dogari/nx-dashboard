import { Component } from '@angular/core';
import {
  BasicTooltipExampleComponent, PageComponent,
  PlaygroundComponent,
  TooltipWithACustomPositionExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicTooltipExampleComponent,
        TooltipWithACustomPositionExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './tooltip-overview.component.html',
    styleUrl: './tooltip-overview.component.scss'
})
export class TooltipOverviewComponent {

}
