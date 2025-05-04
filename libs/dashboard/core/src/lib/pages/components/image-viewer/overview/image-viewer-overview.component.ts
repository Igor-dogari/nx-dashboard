import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import {
  BasicImageViewerExampleComponent
} from '@core';
import {
  ImageViewerWithCaptionAndDescriptionExampleComponent
} from '@core';
import {
  ImageViewerWithTitleExampleComponent
} from '@core';
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
