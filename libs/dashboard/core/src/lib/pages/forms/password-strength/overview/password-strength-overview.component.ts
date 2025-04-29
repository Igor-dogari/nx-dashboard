import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicPasswordStrengthExampleComponent
} from '../_examples/basic-password-strength-example/basic-password-strength-example.component';
import {
  PasswordStrengthInfoExampleComponent
} from '../_examples/password-strength-info-example/password-strength-info-example.component';
import {
  PasswordToggleVisibilityExampleComponent
} from '../_examples/password-toggle-visibility-example/password-toggle-visibility-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
