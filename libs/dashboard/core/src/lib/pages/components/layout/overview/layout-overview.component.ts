import { Component } from '@angular/core';
import { PlaygroundComponent } from '@core';
import { LayoutHeaderExampleComponent } from '@core';
import { LayoutSidebarExampleComponent } from '@core';
import {
  LayoutHeaderWithSidebarExampleComponent
} from '@core';
import {
  LayoutHeaderWithTopbarExampleComponent
} from '@core';
import { LayoutFooterExampleComponent } from '@core';
import {
  LayoutHeaderWithFooterExampleComponent
} from '@core';
import {
  LayoutWithNestedLayoutsExampleComponent
} from '@core';
import { LayoutAsideExampleComponent } from '@core';
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
