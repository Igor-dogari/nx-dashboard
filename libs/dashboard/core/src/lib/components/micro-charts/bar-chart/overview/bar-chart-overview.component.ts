import { Component } from '@angular/core';
import {
  MchartBarBasicExampleComponent,
  MchartBarCustomRadiusExampleComponent,
  MchartBarFillGradientExampleComponent,
  MchartBarResponsiveExampleComponent,
  MchartBarWithBarHighlightExampleComponent, MchartBarWithTooltipExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
