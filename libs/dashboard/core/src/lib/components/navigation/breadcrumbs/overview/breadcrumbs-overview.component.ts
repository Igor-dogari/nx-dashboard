import { Component } from '@angular/core';
import {
  BasicBreadcrumbsExampleComponent, BreadcrumbsGlobalExampleComponent,
  BreadcrumbsWithDatasourceExampleComponent,
  BreadcrumbsWithIconsExampleComponent, BreadcrumbsWithLastItemAsLinkExampleComponent,
  BreadcrumbsWithTitlesExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

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
