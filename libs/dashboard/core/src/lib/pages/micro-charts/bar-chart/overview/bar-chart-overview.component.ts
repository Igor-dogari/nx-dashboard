import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import {
  MchartBarBasicExampleComponent
} from '../_examples/mchart-bar-basic-example/mchart-bar-basic-example.component';
import {
  MchartBarCustomRadiusExampleComponent
} from '../_examples/mchart-bar-custom-radius-example/mchart-bar-custom-radius-example.component';
import {
  MchartBarWithBarHighlightExampleComponent
} from '../_examples/mchart-bar-with-bar-highlight-example/mchart-bar-with-bar-highlight-example.component';
import {
  MchartBarResponsiveExampleComponent
} from '../_examples/mchart-bar-responsive-example/mchart-bar-responsive-example.component';
import {
  MchartBarFillGradientExampleComponent
} from '../_examples/mchart-bar-fill-gradient-example/mchart-bar-fill-gradient-example.component';
import {
  MchartBarWithTooltipExampleComponent
} from '../_examples/mchart-bar-with-tooltip-example/mchart-bar-with-tooltip-example.component';

@Component({
    selector: 'app-overview',
    imports: [
        PageComponent,
        PageContentDirective,
        PlaygroundComponent,
        MchartBarBasicExampleComponent,
        MchartBarCustomRadiusExampleComponent,
        MchartBarWithBarHighlightExampleComponent,
        MchartBarResponsiveExampleComponent,
        MchartBarFillGradientExampleComponent,
        MchartBarWithTooltipExampleComponent
    ],
    templateUrl: './bar-chart-overview.component.html',
    styleUrl: './bar-chart-overview.component.scss'
})
export class BarChartOverviewComponent {

}
