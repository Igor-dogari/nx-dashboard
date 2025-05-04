import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicSlideToggleExampleComponent
} from '@core';
import {
  SlideToggleWithFormsExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

@Component({
    imports: [
        PlaygroundComponent,
        BasicSlideToggleExampleComponent,
        SlideToggleWithFormsExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './slide-toggle-overview.component.html',
    styleUrl: './slide-toggle-overview.component.scss'
})
export class SlideToggleOverviewComponent {

}
