import { Component } from '@angular/core';
import { BasicTableExampleComponent } from '@core';
import { PlaygroundComponent } from '@core';
import {
  TableWithPaginationExampleComponent
} from '@core';
import { TableWithSortExampleComponent } from '@core';
import {
  TableWithFilteringExampleComponent
} from '@core';
import {
  TableWithSelectionExampleComponent
} from '@core';
import {
  TableWithFixedColumnsExampleComponent
} from '@core';
import {
  TableWithStickyHeaderExampleComponent
} from '@core';
import {
  TableWithStickyFooterExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { SortableTableExampleComponent } from '@core';

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
