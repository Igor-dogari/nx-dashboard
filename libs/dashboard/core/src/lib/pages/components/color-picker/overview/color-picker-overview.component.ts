import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicColorPickerExampleComponent
} from '@core/pages';
import {
  ColorPickerWithPopoverExampleComponent
} from '@core/pages';
import {
  InputWithColorPickerExampleComponent
} from '@core/pages';
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
