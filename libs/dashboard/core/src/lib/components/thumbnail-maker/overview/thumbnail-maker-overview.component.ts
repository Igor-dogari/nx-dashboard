import { Component } from '@angular/core';
import {
  BasicThumbnailMakerComponent,
  PageComponent,
  PlaygroundComponent, ThumbnailMakerWithFileSelectExampleComponent,
  ThumbnailMakerWithHelperTextExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicThumbnailMakerComponent,
    ThumbnailMakerWithHelperTextExampleComponent,
    ThumbnailMakerWithFileSelectExampleComponent
  ],
  templateUrl: './thumbnail-maker-overview.component.html',
  styleUrl: './thumbnail-maker-overview.component.scss'
})
export class ThumbnailMakerOverviewComponent {

}
