import { Component } from '@angular/core';
import {
  BasicTabsExampleComponent, PageComponent, PaginatedTabsExampleComponent,
  PlaygroundComponent, SortableTabsExampleComponent,
  TabsWithAlignedLabelsExampleComponent,
  TabsWithCustomLabelTemplateExampleComponent,
  TabsWithHeadersOnTheBottomExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
