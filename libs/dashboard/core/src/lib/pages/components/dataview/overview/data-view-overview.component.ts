import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { BasicDataviewExampleComponent } from '@core/pages';
import {
  DataviewWithSelectionExampleComponent
} from '@core/pages';
import {
  DataViewWithPaginationExampleComponent
} from '@core/pages';
import {
  DataViewWithSortingExampleComponent
} from '@core/pages';
import {
  DataViewHlHeaderExampleComponent
} from '@core/pages';
import {
  DataViewCustomCellRenderersExampleComponent
} from '@core/pages';
import {
  DataViewWithActionBarExampleComponent
} from '@core/pages';
import {
  DataViewFilterDataExampleComponent
} from '@core/pages';
import {
  DataViewLoadingStateExampleComponent
} from '@core/pages';

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
