import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicBrandColorsExampleComponent
} from '@core';
import {
  BrandColorsCustomColorsExampleComponent
} from '@core';
import {
  BrandColorsAsFormControlExampleComponent
} from '@core';
import {
  BrandColorsDisabledExampleComponent
} from '@core';
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
