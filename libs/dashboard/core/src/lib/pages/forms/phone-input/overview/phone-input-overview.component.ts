import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicPhoneInputExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import {
  PhoneInputOnlyCountriesExampleComponent
} from '@core';
import {
  PhoneInputPreferredCountriesExampleComponent
} from '@core';

@Component({
  imports: [
    PlaygroundComponent,
    BasicPhoneInputExampleComponent,
    PageComponent,
    PageContentDirective,
    MatTab,
    MatTabGroup,
    PhoneInputOnlyCountriesExampleComponent,
    PhoneInputPreferredCountriesExampleComponent
  ],
  templateUrl: './phone-input-overview.component.html',
  styleUrl: './phone-input-overview.component.scss'
})
export class PhoneInputOverviewComponent {

}
