import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicSlideToggleExampleComponent
} from '../_examples/basic-slide-toggle-example/basic-slide-toggle-example.component';
import {
  SlideToggleWithFormsExampleComponent
} from '../_examples/slide-toggle-with-forms-example/slide-toggle-with-forms-example.component';
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
