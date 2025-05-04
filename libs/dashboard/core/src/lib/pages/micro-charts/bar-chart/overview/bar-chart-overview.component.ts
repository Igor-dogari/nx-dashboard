import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  MchartBarBasicExampleComponent
} from '@core/pages';
import {
  MchartBarCustomRadiusExampleComponent
} from '@core/pages';
import {
  MchartBarWithBarHighlightExampleComponent
} from '@core/pages';
import {
  MchartBarResponsiveExampleComponent
} from '@core/pages';
import {
  MchartBarFillGradientExampleComponent
} from '@core/pages';
import {
  MchartBarWithTooltipExampleComponent
} from '@core/pages';

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
