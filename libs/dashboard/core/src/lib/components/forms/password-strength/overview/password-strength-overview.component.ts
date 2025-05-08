import { Component } from '@angular/core';
import {
  BasicPasswordStrengthExampleComponent, PageComponent,
  PasswordStrengthInfoExampleComponent, PasswordToggleVisibilityExampleComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
