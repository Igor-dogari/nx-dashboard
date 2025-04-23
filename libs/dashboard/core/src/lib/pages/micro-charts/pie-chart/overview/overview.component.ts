import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import {
  MchartPieBasicExampleComponent
} from '../_examples/mchart-pie-basic-example/mchart-pie-basic-example.component';
import {
  MchartPieWithLegendExampleComponent
} from '../_examples/mchart-pie-with-legend-example/mchart-pie-with-legend-example.component';
import {
  MchartPieValueOnSlicesExampleComponent
} from '../_examples/mchart-pie-value-on-slices-example/mchart-pie-value-on-slices-example.component';
import {
  MchartPieWithTooltipExampleComponent
} from '../_examples/mchart-pie-with-tooltip-example/mchart-pie-with-tooltip-example.component';

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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
