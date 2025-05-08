import { Component } from '@angular/core';
import { ImageViewerDirective, ImageViewerPictureDirective } from '@core/directives';

@Component({
  selector: 'app-basic-image-viewer-example',
  imports: [
    ImageViewerDirective,
    ImageViewerPictureDirective
  ],
  templateUrl: './basic-image-viewer-example.component.html',
  styleUrl: './basic-image-viewer-example.component.scss'
})
export class BasicImageViewerExampleComponent {

}
