import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicButtonToggleExampleComponent
} from '../_examples/basic-button-toggle-example/basic-button-toggle-example.component';
import {
  ButtonToggleSelectionModeExampleComponent
} from '../_examples/button-toggle-selection-mode-example/button-toggle-selection-mode-example.component';
import {
  ButtonToggleAppearanceExampleComponent
} from '../_examples/button-toggle-appearance-example/button-toggle-appearance-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

@Component({
    imports: [
        PlaygroundComponent,
        BasicButtonToggleExampleComponent,
        ButtonToggleSelectionModeExampleComponent,
        ButtonToggleAppearanceExampleComponent,
        PageComponent,
        PageContentDirective,
    ],
    templateUrl: './button-toggle-overview.component.html',
    styleUrl: './button-toggle-overview.component.scss'
})
export class ButtonToggleOverviewComponent {

}
