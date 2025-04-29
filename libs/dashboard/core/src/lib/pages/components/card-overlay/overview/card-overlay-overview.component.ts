import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import {
  BasicCardOverlayExampleComponent
} from '../_examples/basic-card-overlay-example/basic-card-overlay-example.component';
import {
  CardOverlayWithTranslateExampleComponent
} from '../_examples/card-overlay-with-translate-example/card-overlay-with-translate-example.component';
import {
  CardOverlayWithBlurExampleComponent
} from '../_examples/card-overlay-with-blur-example/card-overlay-with-blur-example.component';
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
