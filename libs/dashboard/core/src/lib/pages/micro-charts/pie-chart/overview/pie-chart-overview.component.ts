import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  MchartPieBasicExampleComponent
} from '@core/pages';
import {
  MchartPieWithLegendExampleComponent
} from '@core/pages';
import {
  MchartPieValueOnSlicesExampleComponent
} from '@core/pages';
import {
  MchartPieWithTooltipExampleComponent
} from '@core/pages';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    MchartPieBasicExampleComponent,
    MchartPieWithLegendExampleComponent,
    MchartPieValueOnSlicesExampleComponent,
    MchartPieWithTooltipExampleComponent
  ],
  templateUrl: './pie-chart-overview.component.html',
  styleUrl: './pie-chart-overview.component.scss'
})
export class PieChartOverviewComponent {

}
