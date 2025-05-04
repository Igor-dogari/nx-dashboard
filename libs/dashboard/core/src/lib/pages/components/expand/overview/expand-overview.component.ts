import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicExpandExampleComponent } from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  ExpandShowButtonIfExpandedExampleComponent
} from '@core';
import {
  ExpandCustomButtonLabelsExampleComponent
} from '@core';
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
