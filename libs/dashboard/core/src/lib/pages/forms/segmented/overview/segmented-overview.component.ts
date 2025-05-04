import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicSegmentedExampleComponent } from '@core/pages';
import { SegmentedSizesExampleComponent } from '@core/pages';
import {
  SegmentedDisabledExampleComponent
} from '@core/pages';
import {
  SegmentedWithIconsExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  SegmentedIconsOnlyExampleComponent
} from '@core/pages';
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
