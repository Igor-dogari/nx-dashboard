import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  MchartLineWithTooltipExampleComponent
} from '../_examples/mchart-line-with-tooltip-example/mchart-line-with-tooltip-example.component';
import {
  MchartLineBasicExampleComponent
} from '../_examples/mchart-line-basic-example/mchart-line-basic-example.component';
import {
  MchartLineCustomCurveExampleComponent
} from '../_examples/mchart-line-custom-curve-example/mchart-line-custom-curve-example.component';
import {
  MchartLineWithAreaExampleComponent
} from '../_examples/mchart-line-with-area-example/mchart-line-with-area-example.component';
import {
  MchartLineCompactExampleComponent
} from '../_examples/mchart-line-compact-example/mchart-line-compact-example.component';
import {
  MchartLineWithMarkersExampleComponent
} from '../_examples/mchart-line-with-markers-example/mchart-line-with-markers-example.component';
import {
  MchartLineResponsiveExampleComponent
} from '../_examples/mchart-line-responsive-example/mchart-line-responsive-example.component';

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
