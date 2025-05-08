import { Component } from '@angular/core';
import {
  BasicSlideToggleExampleComponent, PageComponent,
  PlaygroundComponent,
  SlideToggleWithFormsExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
