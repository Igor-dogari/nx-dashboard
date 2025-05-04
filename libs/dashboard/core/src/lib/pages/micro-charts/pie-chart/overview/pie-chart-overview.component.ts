import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  MchartPieBasicExampleComponent
} from '@core';
import {
  MchartPieWithLegendExampleComponent
} from '@core';
import {
  MchartPieValueOnSlicesExampleComponent
} from '@core';
import {
  MchartPieWithTooltipExampleComponent
} from '@core';

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
