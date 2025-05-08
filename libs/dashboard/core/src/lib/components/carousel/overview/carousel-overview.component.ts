import { Component } from '@angular/core';
import {
  BasicCarouselExampleComponent,
  CarouselControlsCustomPositionExampleComponent, CarouselFadeEffectExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
