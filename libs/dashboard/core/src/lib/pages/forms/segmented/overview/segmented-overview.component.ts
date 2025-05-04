import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSegmentedExampleComponent } from '@core';
import { SegmentedSizesExampleComponent } from '@core';
import {
  SegmentedDisabledExampleComponent
} from '@core';
import {
  SegmentedWithIconsExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  SegmentedIconsOnlyExampleComponent
} from '@core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
    selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicSegmentedExampleComponent,
    SegmentedSizesExampleComponent,
    SegmentedDisabledExampleComponent,
    SegmentedWithIconsExampleComponent,
    PageComponent,
    PageContentDirective,
    SegmentedIconsOnlyExampleComponent,
    MatTab,
    MatTabGroup
  ],
    templateUrl: './segmented-overview.component.html',
    styleUrl: './segmented-overview.component.scss'
})
export class SegmentedOverviewComponent {

}
