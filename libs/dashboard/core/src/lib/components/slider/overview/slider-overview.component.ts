import { Component } from '@angular/core';
import {
  BasicSliderExampleComponent, ConfigurableSliderExampleComponent,
  CustomThumbLabelFormattingExampleComponent, PageComponent,
  PlaygroundComponent, RangeSliderExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
