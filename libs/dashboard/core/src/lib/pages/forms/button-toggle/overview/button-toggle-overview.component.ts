import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicButtonToggleExampleComponent
} from '@core';
import {
  ButtonToggleSelectionModeExampleComponent
} from '@core';
import {
  ButtonToggleAppearanceExampleComponent
} from '@core';
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
