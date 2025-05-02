import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSliderExampleComponent } from '../_examples/basic-slider-example/basic-slider-example.component';
import {
  CustomThumbLabelFormattingExampleComponent
} from '../_examples/custom-thumb-label-formatting-example/custom-thumb-label-formatting-example.component';
import { RangeSliderExampleComponent } from '../_examples/range-slider-example/range-slider-example.component';
import {
  ConfigurableSliderExampleComponent
} from '../_examples/configurable-slider-example/configurable-slider-example.component';
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
