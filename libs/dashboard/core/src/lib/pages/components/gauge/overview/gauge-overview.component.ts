import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicGaugeExampleComponent } from '@core';
import {
  GaugeWithValueExampleComponent
} from '@core';
import {
  GaugeCustomSizeExampleComponent
} from '@core';
import {
  GaugeCustomStrokeWidthExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  imports: [
    PlaygroundComponent,
    BasicGaugeExampleComponent,
    GaugeWithValueExampleComponent,
    GaugeCustomSizeExampleComponent,
    GaugeCustomStrokeWidthExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './gauge-overview.component.html',
  styleUrl: './gauge-overview.component.scss'
})
export class GaugeOverviewComponent {

}
