import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicButtonToggleExampleComponent
} from '@core/pages';
import {
  ButtonToggleSelectionModeExampleComponent
} from '@core/pages';
import {
  ButtonToggleAppearanceExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
