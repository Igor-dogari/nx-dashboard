import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { BasicTabsExampleComponent } from '../_examples/basic-tabs-example/basic-tabs-example.component';
import {
  TabsWithAlignedLabelsExampleComponent
} from '../_examples/tabs-with-aligned-labels-example/tabs-with-aligned-labels-example.component';
import {
  TabsWithCustomLabelTemplateExampleComponent
} from '../_examples/tabs-with-custom-label-template-example/tabs-with-custom-label-template-example.component';
import {
  TabsWithHeadersOnTheBottomExampleComponent
} from '../_examples/tabs-with-headers-on-the-bottom-example/tabs-with-headers-on-the-bottom-example.component';
import { PaginatedTabsExampleComponent } from '../_examples/paginated-tabs-example/paginated-tabs-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import { SortableTabsExampleComponent } from '../_examples/sortable-tabs-example/sortable-tabs-example.component';

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
