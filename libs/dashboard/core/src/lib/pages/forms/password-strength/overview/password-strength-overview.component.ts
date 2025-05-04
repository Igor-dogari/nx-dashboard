import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicPasswordStrengthExampleComponent
} from '@core/pages';
import {
  PasswordStrengthInfoExampleComponent
} from '@core/pages';
import {
  PasswordToggleVisibilityExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicPasswordStrengthExampleComponent,
        PasswordStrengthInfoExampleComponent,
        PasswordToggleVisibilityExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './password-strength-overview.component.html',
    styleUrl: './password-strength-overview.component.scss'
})
export class PasswordStrengthOverviewComponent {

}
