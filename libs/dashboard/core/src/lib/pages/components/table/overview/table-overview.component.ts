import { Component } from '@angular/core';
import { BasicTableExampleComponent } from '@core/pages';
import { PlaygroundComponent } from '@core';
import {
  TableWithPaginationExampleComponent
} from '@core/pages';
import { TableWithSortExampleComponent } from '@core/pages';
import {
  TableWithFilteringExampleComponent
} from '@core/pages';
import {
  TableWithSelectionExampleComponent
} from '@core/pages';
import {
  TableWithFixedColumnsExampleComponent
} from '@core/pages';
import {
  TableWithStickyHeaderExampleComponent
} from '@core/pages';
import {
  TableWithStickyFooterExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { SortableTableExampleComponent } from '@core/pages';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicTableExampleComponent,
        TableWithPaginationExampleComponent,
        TableWithSortExampleComponent,
        TableWithFilteringExampleComponent,
        TableWithSelectionExampleComponent,
        TableWithFixedColumnsExampleComponent,
        TableWithStickyHeaderExampleComponent,
        TableWithStickyFooterExampleComponent,
        PageComponent,
        PageContentDirective,
        SortableTableExampleComponent
    ],
    templateUrl: './table-overview.component.html',
    styleUrl: './table-overview.component.scss'
})
export class TableOverviewComponent {

}
