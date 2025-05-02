import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicCarouselExampleComponent } from '../_examples/basic-carousel-example/basic-carousel-example.component';
import {
  CarouselControlsCustomPositionExampleComponent
} from '../_examples/carousel-controls-custom-position-example/carousel-controls-custom-position-example.component';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  CarouselFadeEffectExampleComponent
} from '../_examples/carousel-fade-effect-example/carousel-fade-effect-example.component';

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
