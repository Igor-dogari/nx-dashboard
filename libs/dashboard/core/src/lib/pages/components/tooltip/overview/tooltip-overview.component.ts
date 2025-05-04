import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicTooltipExampleComponent } from '@core/pages';
import {
  TooltipWithACustomPositionExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
