import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicCardOverlayExampleComponent
} from '@core';
import {
  CardOverlayWithTranslateExampleComponent
} from '@core';
import {
  CardOverlayWithBlurExampleComponent
} from '@core';
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
