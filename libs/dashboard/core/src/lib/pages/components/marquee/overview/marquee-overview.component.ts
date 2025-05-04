import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { BasicMarqueeExampleComponent } from '@core';
import { MarqueeReverseExampleComponent } from '@core';
import {
  MarqueePauseOnHoverExampleComponent
} from '@core';

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
