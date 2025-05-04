import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { BasicThumbnailMakerComponent } from '@core/pages';
import {
  ThumbnailMakerWithHelperTextExampleComponent
} from '@core/pages';
import {
  ThumbnailMakerWithFileSelectExampleComponent
} from '@core/pages';

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
