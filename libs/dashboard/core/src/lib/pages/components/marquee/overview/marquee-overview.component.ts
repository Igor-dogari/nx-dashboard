import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { BasicMarqueeExampleComponent } from '@core/pages';
import { MarqueeReverseExampleComponent } from '@core/pages';
import {
  MarqueePauseOnHoverExampleComponent
} from '@core/pages';

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
