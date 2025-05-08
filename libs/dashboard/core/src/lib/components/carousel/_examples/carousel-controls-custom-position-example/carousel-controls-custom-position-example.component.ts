import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import {
  CarouselCardComponent,
  CarouselComponent,
} from '@core/components';
import { CarouselNextDirective, CarouselPreviousDirective } from '@core/directives';

@Component({
  selector: 'app-carousel-controls-custom-position-example',
  imports: [
    CarouselCardComponent,
    CarouselComponent,
    CarouselNextDirective,
    CarouselPreviousDirective,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './carousel-controls-custom-position-example.component.html',
  styleUrl: './carousel-controls-custom-position-example.component.scss'
})
export class CarouselControlsCustomPositionExampleComponent {

}
