import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSliderExampleComponent } from '@core';
import {
  CustomThumbLabelFormattingExampleComponent
} from '@core';
import { RangeSliderExampleComponent } from '@core';
import {
  ConfigurableSliderExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicSliderExampleComponent,
    CustomThumbLabelFormattingExampleComponent,
    RangeSliderExampleComponent,
    ConfigurableSliderExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './slider-overview.component.html',
  styleUrl: './slider-overview.component.scss'
})
export class SliderOverviewComponent {

}
