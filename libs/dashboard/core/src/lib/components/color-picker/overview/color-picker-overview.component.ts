import { Component } from '@angular/core';
import {
  BasicColorPickerExampleComponent,
  ColorPickerWithPopoverExampleComponent, InputWithColorPickerExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
