import { Component } from '@angular/core';
import {
  BasicSegmentedExampleComponent, PageComponent,
  PlaygroundComponent,
  SegmentedDisabledExampleComponent, SegmentedIconsOnlyExampleComponent,
  SegmentedSizesExampleComponent, SegmentedWithIconsExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';
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
