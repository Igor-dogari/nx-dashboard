import { Directive, HostListener, inject, input, OnInit } from '@angular/core';
import { CAROUSEL, CarouselInterface } from '@core/models';

@Directive({
  selector: '[emrCarouselNext]',
  exportAs: 'emrCarouselNext',
  standalone: true,
  host: {
    class: 'emr-carousel-next',
    '[attr.disabled]': '_carousel?.api.isNextDisabled()  ? true : null',
  },
})
export class CarouselNextDirective implements OnInit {
  protected _carousel = inject<CarouselInterface>(CAROUSEL, {
    optional: true,
  });

  carousel = input<CarouselInterface | null>(null);

  ngOnInit(): void {
    if (this.carousel() && !this._carousel) {
      this._carousel = this.carousel();
    }
  }

  @HostListener('click')
  private _handleClick(): void {
    this._carousel?.api.next();
  }
}
