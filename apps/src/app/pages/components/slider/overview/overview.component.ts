import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicSliderExampleComponent } from '../_examples/basic-slider-example/basic-slider-example.component';
import {
  CustomThumbLabelFormattingExampleComponent
} from '../_examples/custom-thumb-label-formatting-example/custom-thumb-label-formatting-example.component';
import { RangeSliderExampleComponent } from '../_examples/range-slider-example/range-slider-example.component';
import {
  ConfigurableSliderExampleComponent
} from '../_examples/configurable-slider-example/configurable-slider-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
