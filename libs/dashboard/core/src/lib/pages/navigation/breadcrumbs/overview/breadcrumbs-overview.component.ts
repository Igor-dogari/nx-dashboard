import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import {
  BasicBreadcrumbsExampleComponent
} from '@core/pages';
import {
  BreadcrumbsWithDatasourceExampleComponent
} from '@core/pages';
import {
  BreadcrumbsWithIconsExampleComponent
} from '@core/pages';
import {
  BreadcrumbsWithTitlesExampleComponent
} from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';
import {
  BreadcrumbsWithLastItemAsLinkExampleComponent
} from '@core/pages';
import {
  BreadcrumbsGlobalExampleComponent
} from '@core/pages';

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
