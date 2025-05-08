import { Component } from '@angular/core';
import {
  BasicCardOverlayExampleComponent, CardOverlayWithBlurExampleComponent,
  CardOverlayWithTranslateExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicCardOverlayExampleComponent,
    CardOverlayWithTranslateExampleComponent,
    CardOverlayWithBlurExampleComponent,
    MatDivider
  ],
    templateUrl: './card-overlay-overview.component.html',
    styleUrl: './card-overlay-overview.component.scss'
})
export class CardOverlayOverviewComponent {

}
