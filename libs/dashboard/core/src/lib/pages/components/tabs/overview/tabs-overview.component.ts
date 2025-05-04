import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { BasicTabsExampleComponent } from '@core/pages';
import {
  TabsWithAlignedLabelsExampleComponent
} from '@core/pages';
import {
  TabsWithCustomLabelTemplateExampleComponent
} from '@core/pages';
import {
  TabsWithHeadersOnTheBottomExampleComponent
} from '@core/pages';
import { PaginatedTabsExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { SortableTabsExampleComponent } from '@core/pages';

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
