import { Component } from '@angular/core';
import {
  ImageViewerDirective,
  ImageViewerPictureCaptionDirective,
  ImageViewerPictureDescriptionDirective,
  ImageViewerPictureDirective,
  ImageViewerPictureTitleDirective
} from '@core/directives';

@Component({
  selector: 'app-image-viewer-with-title-example',
  imports: [
    ImageViewerDirective,
    ImageViewerPictureCaptionDirective,
    ImageViewerPictureDescriptionDirective,
    ImageViewerPictureDirective,
    ImageViewerPictureTitleDirective
  ],
  templateUrl: './image-viewer-with-title-example.component.html',
  styleUrl: './image-viewer-with-title-example.component.scss'
})
export class ImageViewerWithTitleExampleComponent {

}
