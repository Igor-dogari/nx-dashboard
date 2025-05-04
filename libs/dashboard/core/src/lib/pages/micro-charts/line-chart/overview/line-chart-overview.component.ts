import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  MchartLineWithTooltipExampleComponent
} from '@core';
import {
  MchartLineBasicExampleComponent
} from '@core';
import {
  MchartLineCustomCurveExampleComponent
} from '@core';
import {
  MchartLineWithAreaExampleComponent
} from '@core';
import {
  MchartLineCompactExampleComponent
} from '@core';
import {
  MchartLineWithMarkersExampleComponent
} from '@core';
import {
  MchartLineResponsiveExampleComponent
} from '@core';

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
