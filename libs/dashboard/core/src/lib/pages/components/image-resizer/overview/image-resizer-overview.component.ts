import { Component } from '@angular/core';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import {
  BasicImageResizerExampleComponent
} from '../_examples/basic-image-resizer-example/basic-image-resizer-example.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicImageResizerExampleComponent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './image-resizer-overview.component.html',
  styleUrl: './image-resizer-overview.component.scss'
})
export class ImageResizerOverviewComponent {

}
