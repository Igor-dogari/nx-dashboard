import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicBrandColorsExampleComponent
} from '../_examples/basic-brand-colors-example/basic-brand-colors-example.component';
import {
  BrandColorsCustomColorsExampleComponent
} from '../_examples/brand-colors-custom-colors-example/brand-colors-custom-colors-example.component';
import {
  BrandColorsAsFormControlExampleComponent
} from '../_examples/brand-colors-as-form-control-example/brand-colors-as-form-control-example.component';
import {
  BrandColorsDisabledExampleComponent
} from '../_examples/brand-colors-disabled-example/brand-colors-disabled-example.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicBrandColorsExampleComponent,
    BrandColorsCustomColorsExampleComponent,
    BrandColorsAsFormControlExampleComponent,
    BrandColorsDisabledExampleComponent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './brand-colors-overview.component.html',
  styleUrl: './brand-colors-overview.component.scss'
})
export class BrandColorsOverviewComponent {

}
