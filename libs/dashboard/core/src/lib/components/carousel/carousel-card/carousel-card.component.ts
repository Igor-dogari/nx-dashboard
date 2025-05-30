import { Component, ElementRef, inject } from '@angular/core';
import { CAROUSEL_CARD } from '@core/models';

@Component({
  selector: 'emr-carousel-card,[emr-carousel-card]',
  exportAs: 'emrCarouselCard',
  imports: [],
  providers: [
    {
      provide: CAROUSEL_CARD,
      useExisting: CarouselCardComponent
    }
  ],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss',
  host: {
    'class': 'emr-carousel-card',
  }
})
export class CarouselCardComponent {
  private _elementRef = inject(ElementRef);

  get element(): HTMLElement {
    return this._elementRef.nativeElement;
  }
}
