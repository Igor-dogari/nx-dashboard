import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  MchartLineWithTooltipExampleComponent
} from '@core/pages';
import {
  MchartLineBasicExampleComponent
} from '@core/pages';
import {
  MchartLineCustomCurveExampleComponent
} from '@core/pages';
import {
  MchartLineWithAreaExampleComponent
} from '@core/pages';
import {
  MchartLineCompactExampleComponent
} from '@core/pages';
import {
  MchartLineWithMarkersExampleComponent
} from '@core/pages';
import {
  MchartLineResponsiveExampleComponent
} from '@core/pages';

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
