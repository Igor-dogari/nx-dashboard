import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicBreadcrumbsExampleComponent
} from '@core';
import {
  BreadcrumbsWithDatasourceExampleComponent
} from '@core';
import {
  BreadcrumbsWithIconsExampleComponent
} from '@core';
import {
  BreadcrumbsWithTitlesExampleComponent
} from '@core';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  BreadcrumbsWithLastItemAsLinkExampleComponent
} from '@core';
import {
  BreadcrumbsGlobalExampleComponent
} from '@core';

@Component({
  imports: [
    PlaygroundComponent,
    BasicBreadcrumbsExampleComponent,
    BreadcrumbsWithDatasourceExampleComponent,
    BreadcrumbsWithIconsExampleComponent,
    BreadcrumbsWithTitlesExampleComponent,
    PageComponent,
    PageContentDirective,
    BreadcrumbsWithLastItemAsLinkExampleComponent,
    BreadcrumbsGlobalExampleComponent
  ],
    templateUrl: './breadcrumbs-overview.component.html',
    styleUrl: './breadcrumbs-overview.component.scss'
})
export class BreadcrumbsOverviewComponent {

}
