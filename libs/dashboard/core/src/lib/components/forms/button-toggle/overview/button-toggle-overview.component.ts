import { Component } from '@angular/core';
import {
  BasicButtonToggleExampleComponent, ButtonToggleAppearanceExampleComponent,
  ButtonToggleSelectionModeExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
