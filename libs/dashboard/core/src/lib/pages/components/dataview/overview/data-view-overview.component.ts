import { Component } from '@angular/core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { BasicDataviewExampleComponent } from '@core';
import {
  DataviewWithSelectionExampleComponent
} from '@core';
import {
  DataViewWithPaginationExampleComponent
} from '@core';
import {
  DataViewWithSortingExampleComponent
} from '@core';
import {
  DataViewHlHeaderExampleComponent
} from '@core';
import {
  DataViewCustomCellRenderersExampleComponent
} from '@core';
import {
  DataViewWithActionBarExampleComponent
} from '@core';
import {
  DataViewFilterDataExampleComponent
} from '@core';
import {
  DataViewLoadingStateExampleComponent
} from '@core';

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
