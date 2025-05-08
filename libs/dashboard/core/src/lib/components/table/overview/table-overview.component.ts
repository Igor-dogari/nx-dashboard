import { Component } from '@angular/core';
import {
  BasicTableExampleComponent,
  PageComponent,
  PlaygroundComponent,
  SortableTableExampleComponent,
  TableWithFilteringExampleComponent,
  TableWithFixedColumnsExampleComponent,
  TableWithPaginationExampleComponent,
  TableWithSelectionExampleComponent,
  TableWithSortExampleComponent,
  TableWithStickyFooterExampleComponent,
  TableWithStickyHeaderExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
