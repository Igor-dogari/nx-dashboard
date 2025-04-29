import { Component } from '@angular/core';
import { PlaygroundComponent } from '@shared';
import { LayoutHeaderExampleComponent } from '../_examples/layout-header-example/layout-header-example.component';
import { LayoutSidebarExampleComponent } from '../_examples/layout-sidebar-example/layout-sidebar-example.component';
import {
  LayoutHeaderWithSidebarExampleComponent
} from '../_examples/layout-header-with-sidebar-example/layout-header-with-sidebar-example.component';
import {
  LayoutHeaderWithTopbarExampleComponent
} from '../_examples/layout-header-with-topbar-example/layout-header-with-topbar-example.component';
import { LayoutFooterExampleComponent } from '../_examples/layout-footer-example/layout-footer-example.component';
import {
  LayoutHeaderWithFooterExampleComponent
} from '../_examples/layout-header-with-footer-example/layout-header-with-footer-example.component';
import {
  LayoutWithNestedLayoutsExampleComponent
} from '../_examples/layout-with-nested-layouts-example/layout-with-nested-layouts-example.component';
import { LayoutAsideExampleComponent } from '../_examples/layout-aside-example/layout-aside-example.component';
import { PageComponent } from '@shared';
import { PageContentDirective } from '@shared';

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
