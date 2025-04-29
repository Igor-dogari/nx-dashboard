import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import { BasicThumbnailMakerComponent } from '../_examples/basic-thumbnail-maker/basic-thumbnail-maker.component';
import {
  ThumbnailMakerWithHelperTextExampleComponent
} from '../_examples/thumbnail-maker-with-helper-text-example/thumbnail-maker-with-helper-text-example.component';
import {
  ThumbnailMakerWithFileSelectExampleComponent
} from '../_examples/thumbnail-maker-with-file-select-example/thumbnail-maker-with-file-select-example.component';

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
