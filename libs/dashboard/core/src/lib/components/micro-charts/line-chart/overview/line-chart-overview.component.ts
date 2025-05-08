import { Component } from '@angular/core';
import {
  MchartLineBasicExampleComponent,
  MchartLineCompactExampleComponent,
  MchartLineCustomCurveExampleComponent,
  MchartLineResponsiveExampleComponent,
  MchartLineWithAreaExampleComponent,
  MchartLineWithMarkersExampleComponent,
  MchartLineWithTooltipExampleComponent,
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
    MchartLineWithTooltipExampleComponent,
    MchartLineBasicExampleComponent,
    MchartLineCustomCurveExampleComponent,
    MchartLineWithAreaExampleComponent,
    MchartLineCompactExampleComponent,
    MchartLineWithMarkersExampleComponent,
    MchartLineResponsiveExampleComponent
  ],
  templateUrl: './line-chart-overview.component.html',
  styleUrl: './line-chart-overview.component.scss'
})
export class LineChartOverviewComponent {

}
