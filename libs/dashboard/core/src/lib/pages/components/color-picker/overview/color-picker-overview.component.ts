import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicColorPickerExampleComponent
} from '../_examples/basic-color-picker-example/basic-color-picker-example.component';
import {
  ColorPickerWithPopoverExampleComponent
} from '../_examples/color-picker-with-popover-example/color-picker-with-popover-example.component';
import {
  InputWithColorPickerExampleComponent
} from '../_examples/input-with-color-picker-example/input-with-color-picker-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
  imports: [
    PlaygroundComponent,
    BasicColorPickerExampleComponent,
    ColorPickerWithPopoverExampleComponent,
    InputWithColorPickerExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './color-picker-overview.component.html',
  styleUrl: './color-picker-overview.component.scss'
})
export class ColorPickerOverviewComponent {

}
