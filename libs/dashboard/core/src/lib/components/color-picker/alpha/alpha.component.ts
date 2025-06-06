import {
  booleanAttribute,
  Component,
  ElementRef,
  inject, input,
  OnChanges, output,
  Renderer2, SimpleChanges,
  viewChild
} from '@angular/core';
import { BaseComponent } from '../base.component';
import { Color } from '@core/utils';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'emr-alpha',
  exportAs: 'emrAlpha',
  imports: [NgStyle],
  templateUrl: './alpha.component.html',
  styleUrl: './alpha.component.scss',
  host: {
    'class': 'emr-alpha'
  }
})
export class AlphaComponent extends BaseComponent implements OnChanges {
  private _renderer = inject(Renderer2);
  readonly pointer = viewChild.required<ElementRef>('pointer');

  color = input.required<Color>();
  isVertical = input(false, {
    transform: booleanAttribute
  });

  readonly colorChange = output<Color>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color'] && changes['color'].previousValue !== changes['color'].currentValue) {
      const hsva = this.color().getHsva();
      this.changePointerPosition(hsva.alpha);
      this._setPointerBgColor();
    }
  }

  // @ts-ignore
  movePointer({ x, y, height, width }): void {
    const alpha = this.isVertical() ? y / height : x / width;
    this.changePointerPosition(alpha);
    const hsva = this.color().getHsva();
    const newColor = new Color().setHsva(hsva.hue, hsva.saturation, hsva.value, alpha);
    this._renderer.setStyle(this.pointer().nativeElement, 'backgroundColor', newColor.toRgbaString());
    this.colorChange.emit(newColor);
  }

  get gradient(): string {
    const rgba = this.color().getRgba();
    const orientation = this.isVertical() ? 'bottom' : 'right';
    return `linear-gradient(to ${orientation}, rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, 0) 0%, rgb(${rgba.red}, ${rgba.green}, ${rgba.blue}) 100%)`;
  }

  /**
   * hue value is in range from 0 to 360°
   */
  private changePointerPosition(alpha: number): void {
    const x = alpha * 100;
    const orientation = this.isVertical() ? 'top' : 'left';
    this._renderer.setStyle(this.pointer().nativeElement, orientation, `${x}%`);
  }

  private _setPointerBgColor() {
    const hsva = this.color().getHsva();
    const newColor = new Color().setHsva(hsva.hue, hsva.saturation, hsva.value, hsva.alpha);
    this._renderer.setStyle(
      this.pointer().nativeElement.querySelector('.pointer-bg'), 'backgroundColor', newColor.toRgbaString()
    );
  }
}
