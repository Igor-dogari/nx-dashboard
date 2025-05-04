import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicCarouselExampleComponent } from '@core/pages';
import {
  CarouselControlsCustomPositionExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  CarouselFadeEffectExampleComponent
} from '@core/pages';

@Component({
  imports: [
    PlaygroundComponent,
    BasicCarouselExampleComponent,
    CarouselControlsCustomPositionExampleComponent,
    PageComponent,
    PageContentDirective,
    CarouselFadeEffectExampleComponent
  ],
  templateUrl: './carousel-overview.component.html',
  styleUrl: './carousel-overview.component.scss'
})
export class CarouselOverviewComponent {

}
