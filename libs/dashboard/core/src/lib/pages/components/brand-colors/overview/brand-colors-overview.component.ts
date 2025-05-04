import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicBrandColorsExampleComponent
} from '@core/pages';
import {
  BrandColorsCustomColorsExampleComponent
} from '@core/pages';
import {
  BrandColorsAsFormControlExampleComponent
} from '@core/pages';
import {
  BrandColorsDisabledExampleComponent
} from '@core/pages';
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
