import { Component, signal } from '@angular/core';
import {
  ImageResizerComponent,
} from '@core/components';
import { JsonPipe } from '@angular/common';
import { ImageResizerImageDirective } from '@core/directives';
import { ImageResizedEvent } from '@core/models';

@Component({
  selector: 'app-basic-image-resizer-example',
  imports: [
    ImageResizerComponent,
    JsonPipe,
    ImageResizerImageDirective
  ],
  templateUrl: './basic-image-resizer-example.component.html',
  styleUrl: './basic-image-resizer-example.component.scss'
})
export class BasicImageResizerExampleComponent {
  imageDimensionsInfo = signal<ImageResizedEvent | null>(null);

  onImageResized(event: ImageResizedEvent) {
    this.imageDimensionsInfo.set(event);
  }
}
