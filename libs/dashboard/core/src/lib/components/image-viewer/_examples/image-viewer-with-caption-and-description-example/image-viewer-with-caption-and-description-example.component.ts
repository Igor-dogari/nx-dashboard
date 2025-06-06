import { Component } from '@angular/core';
import {
  ImageViewerDirective,
  ImageViewerPictureCaptionDirective, ImageViewerPictureDescriptionDirective,
  ImageViewerPictureDirective
} from '@core/directives';

@Component({
  selector: 'app-image-viewer-with-caption-and-description-example',
  imports: [
    ImageViewerDirective,
    ImageViewerPictureDirective,
    ImageViewerPictureCaptionDirective,
    ImageViewerPictureDescriptionDirective
  ],
  templateUrl: './image-viewer-with-caption-and-description-example.component.html',
  styleUrl: './image-viewer-with-caption-and-description-example.component.scss'
})
export class ImageViewerWithCaptionAndDescriptionExampleComponent {

}
