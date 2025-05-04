import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicTabsExampleComponent } from '@core';
import {
  TabsWithAlignedLabelsExampleComponent
} from '@core';
import {
  TabsWithCustomLabelTemplateExampleComponent
} from '@core';
import {
  TabsWithHeadersOnTheBottomExampleComponent
} from '@core';
import { PaginatedTabsExampleComponent } from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { SortableTabsExampleComponent } from '@core';

@Component({
    imports: [
        PlaygroundComponent,
        BasicTabsExampleComponent,
        TabsWithAlignedLabelsExampleComponent,
        TabsWithCustomLabelTemplateExampleComponent,
        TabsWithHeadersOnTheBottomExampleComponent,
        PaginatedTabsExampleComponent,
        PageComponent,
        PageContentDirective,
        SortableTabsExampleComponent
    ],
    templateUrl: './tabs-overview.component.html',
    styleUrl: './tabs-overview.component.scss'
})
export class TabsOverviewComponent {

}
