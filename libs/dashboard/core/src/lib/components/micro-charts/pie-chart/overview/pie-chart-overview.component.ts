import { Component } from '@angular/core';
import {
  MchartPieBasicExampleComponent, MchartPieValueOnSlicesExampleComponent,
  MchartPieWithLegendExampleComponent, MchartPieWithTooltipExampleComponent,
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
