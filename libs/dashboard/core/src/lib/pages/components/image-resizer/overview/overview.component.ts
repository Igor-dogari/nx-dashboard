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
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
