import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  MchartBarBasicExampleComponent
} from '@core';
import {
  MchartBarCustomRadiusExampleComponent
} from '@core';
import {
  MchartBarWithBarHighlightExampleComponent
} from '@core';
import {
  MchartBarResponsiveExampleComponent
} from '@core';
import {
  MchartBarFillGradientExampleComponent
} from '@core';
import {
  MchartBarWithTooltipExampleComponent
} from '@core';

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
