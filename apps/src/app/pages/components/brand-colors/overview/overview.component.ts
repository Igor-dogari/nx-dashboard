import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
