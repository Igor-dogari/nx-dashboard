import { Component } from '@angular/core';
import {
  BasicImageViewerExampleComponent,
  ImageViewerWithCaptionAndDescriptionExampleComponent, ImageViewerWithTitleExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';
import { MatDivider } from '@angular/material/divider';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicImageViewerExampleComponent,
    ImageViewerWithCaptionAndDescriptionExampleComponent,
    ImageViewerWithTitleExampleComponent,
    MatDivider
  ],
  templateUrl: './image-viewer-overview.component.html',
  styleUrl: './image-viewer-overview.component.scss'
})
export class ImageViewerOverviewComponent {

}
