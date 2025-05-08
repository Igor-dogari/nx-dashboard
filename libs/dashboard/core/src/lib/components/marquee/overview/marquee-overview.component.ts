import { Component } from '@angular/core';
import {
  BasicMarqueeExampleComponent, MarqueePauseOnHoverExampleComponent,
  MarqueeReverseExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
    selector: 'app-overview',
    imports: [
        PageComponent,
        PageContentDirective,
        PlaygroundComponent,
        BasicMarqueeExampleComponent,
        MarqueeReverseExampleComponent,
        MarqueePauseOnHoverExampleComponent
    ],
    templateUrl: './marquee-overview.component.html',
    styleUrl: './marquee-overview.component.scss'
})
export class MarqueeOverviewComponent {

}
