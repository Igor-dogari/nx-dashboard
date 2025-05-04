import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicCarouselExampleComponent } from '@core';
import {
  CarouselControlsCustomPositionExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  CarouselFadeEffectExampleComponent
} from '@core';

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
