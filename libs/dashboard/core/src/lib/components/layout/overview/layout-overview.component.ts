import { Component } from '@angular/core';
import {
  LayoutAsideExampleComponent,
  LayoutFooterExampleComponent,
  LayoutHeaderExampleComponent, LayoutHeaderWithFooterExampleComponent,
  LayoutHeaderWithSidebarExampleComponent, LayoutHeaderWithTopbarExampleComponent,
  LayoutSidebarExampleComponent, LayoutWithNestedLayoutsExampleComponent, PageComponent,
  PlaygroundComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  imports: [
    PlaygroundComponent,
    LayoutHeaderExampleComponent,
    LayoutSidebarExampleComponent,
    LayoutHeaderWithSidebarExampleComponent,
    LayoutHeaderWithTopbarExampleComponent,
    LayoutFooterExampleComponent,
    LayoutHeaderWithFooterExampleComponent,
    LayoutWithNestedLayoutsExampleComponent,
    LayoutAsideExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './layout-overview.component.html',
  styleUrl: './layout-overview.component.scss'
})
export class LayoutOverviewComponent {

}
