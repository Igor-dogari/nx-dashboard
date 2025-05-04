import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { LayoutHeaderExampleComponent } from '@core/pages';
import { LayoutSidebarExampleComponent } from '@core/pages';
import {
  LayoutHeaderWithSidebarExampleComponent
} from '@core/pages';
import {
  LayoutHeaderWithTopbarExampleComponent
} from '@core/pages';
import { LayoutFooterExampleComponent } from '@core/pages';
import {
  LayoutHeaderWithFooterExampleComponent
} from '@core/pages';
import {
  LayoutWithNestedLayoutsExampleComponent
} from '@core/pages';
import { LayoutAsideExampleComponent } from '@core/pages';
import { PageComponent } from '@core';
import { PageContentDirective } from '@core';

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
