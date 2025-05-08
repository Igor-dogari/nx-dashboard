import { Component } from '@angular/core';
import {
  BasicPhoneInputExampleComponent,
  PageComponent,
  PhoneInputOnlyCountriesExampleComponent, PhoneInputPreferredCountriesExampleComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

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
