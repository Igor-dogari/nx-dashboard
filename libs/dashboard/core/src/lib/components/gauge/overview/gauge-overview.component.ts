import { Component } from '@angular/core';
import {
  BasicGaugeExampleComponent,
  GaugeCustomSizeExampleComponent, GaugeCustomStrokeWidthExampleComponent,
  GaugeWithValueExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
