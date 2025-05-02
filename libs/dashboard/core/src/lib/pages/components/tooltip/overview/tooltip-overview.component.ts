import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicTooltipExampleComponent } from '../_examples/basic-tooltip-example/basic-tooltip-example.component';
import {
  TooltipWithACustomPositionExampleComponent
} from '../_examples/tooltip-with-a-custom-position-example/tooltip-with-a-custom-position-example.component';
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
