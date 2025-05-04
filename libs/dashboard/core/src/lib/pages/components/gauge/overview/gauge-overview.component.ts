import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicGaugeExampleComponent } from '@core/pages';
import {
  GaugeWithValueExampleComponent
} from '@core/pages';
import {
  GaugeCustomSizeExampleComponent
} from '@core/pages';
import {
  GaugeCustomStrokeWidthExampleComponent
} from '@core/pages';
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
