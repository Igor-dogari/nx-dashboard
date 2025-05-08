import { Component } from '@angular/core';
import { BasicImageResizerExampleComponent, PageComponent, PlaygroundComponent } from '@core/components';
import { PageContentDirective } from '@core/directives';
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
