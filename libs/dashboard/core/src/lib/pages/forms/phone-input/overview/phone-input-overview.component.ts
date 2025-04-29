import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicPhoneInputExampleComponent
} from '../_examples/basic-phone-input-example/basic-phone-input-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import {
  PhoneInputOnlyCountriesExampleComponent
} from '../_examples/phone-input-only-countries-example/phone-input-only-countries-example.component';
import {
  PhoneInputPreferredCountriesExampleComponent
} from '../_examples/phone-input-preferred-countries-example/phone-input-preferred-countries-example.component';

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
