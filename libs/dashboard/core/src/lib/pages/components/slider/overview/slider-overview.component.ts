import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSliderExampleComponent } from '@core/pages';
import {
  CustomThumbLabelFormattingExampleComponent
} from '@core/pages';
import { RangeSliderExampleComponent } from '@core/pages';
import {
  ConfigurableSliderExampleComponent
} from '@core/pages';
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
