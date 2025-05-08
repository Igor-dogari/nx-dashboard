import { Component } from '@angular/core';
import {
  BasicDataviewExampleComponent,
  DataViewCustomCellRenderersExampleComponent, DataViewFilterDataExampleComponent,
  DataViewHlHeaderExampleComponent, DataViewLoadingStateExampleComponent, DataViewWithActionBarExampleComponent,
  DataViewWithPaginationExampleComponent,
  DataviewWithSelectionExampleComponent,
  DataViewWithSortingExampleComponent,
  PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicDataviewExampleComponent,
    DataviewWithSelectionExampleComponent,
    DataViewWithPaginationExampleComponent,
    DataViewWithSortingExampleComponent,
    DataViewHlHeaderExampleComponent,
    DataViewCustomCellRenderersExampleComponent,
    DataViewWithActionBarExampleComponent,
    DataViewFilterDataExampleComponent,
    DataViewLoadingStateExampleComponent
  ],
  templateUrl: './data-view-overview.component.html',
  styleUrl: './data-view-overview.component.scss'
})
export class DataViewOverviewComponent {

}
