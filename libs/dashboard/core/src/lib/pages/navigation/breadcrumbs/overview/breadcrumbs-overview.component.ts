import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import {
  BasicBreadcrumbsExampleComponent
} from '../_examples/basic-breadcrumbs-example/basic-breadcrumbs-example.component';
import {
  BreadcrumbsWithDatasourceExampleComponent
} from '../_examples/breadcrumbs-with-datasource-example/breadcrumbs-with-datasource-example.component';
import {
  BreadcrumbsWithIconsExampleComponent
} from '../_examples/breadcrumbs-with-icons-example/breadcrumbs-with-icons-example.component';
import {
  BreadcrumbsWithTitlesExampleComponent
} from '../_examples/breadcrumbs-with-titles-example/breadcrumbs-with-titles-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';
import {
  BreadcrumbsWithLastItemAsLinkExampleComponent
} from '../_examples/breadcrumbs-with-last-item-as-link-example/breadcrumbs-with-last-item-as-link-example.component';
import {
  BreadcrumbsGlobalExampleComponent
} from '../_examples/breadcrumbs-global-example/breadcrumbs-global-example.component';

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
