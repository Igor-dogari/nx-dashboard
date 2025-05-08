import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  CarouselCardComponent,
  CarouselComponent,
} from '@core/components';
import { CarouselNextDirective, CarouselPreviousDirective } from '@core/directives';

@Component({
  selector: 'app-basic-carousel-example',
  imports: [
    CarouselComponent,
    CarouselCardComponent,
    MatIcon,
    CarouselPreviousDirective,
    CarouselNextDirective,
    MatIconButton
  ],
  templateUrl: './basic-carousel-example.component.html',
  styleUrl: './basic-carousel-example.component.scss'
})
export class BasicCarouselExampleComponent {

}
