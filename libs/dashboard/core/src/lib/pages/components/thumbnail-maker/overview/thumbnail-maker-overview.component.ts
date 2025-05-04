import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { BasicThumbnailMakerComponent } from '@core';
import {
  ThumbnailMakerWithHelperTextExampleComponent
} from '@core';
import {
  ThumbnailMakerWithFileSelectExampleComponent
} from '@core';

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
