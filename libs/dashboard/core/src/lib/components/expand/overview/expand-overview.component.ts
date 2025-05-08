import { Component } from '@angular/core';
import {
  BasicExpandExampleComponent, ExpandCustomButtonLabelsExampleComponent,
  ExpandShowButtonIfExpandedExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  imports: [
    PlaygroundComponent,
    BasicExpandExampleComponent,
    PageComponent,
    PageContentDirective,
    ExpandShowButtonIfExpandedExampleComponent,
    ExpandCustomButtonLabelsExampleComponent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './expand-overview.component.html',
  styleUrl: './expand-overview.component.scss'
})
export class ExpandOverviewComponent {

}
