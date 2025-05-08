import { Component } from '@angular/core';
import {
  BasicBrandColorsExampleComponent, BrandColorsAsFormControlExampleComponent,
  BrandColorsCustomColorsExampleComponent, BrandColorsDisabledExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';
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
