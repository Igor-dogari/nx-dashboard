import { Component } from '@angular/core';
import {
  BasicSidebarExampleComponent,
  PageComponent,
  PlaygroundComponent,
  SidebarCompactExampleComponent, SidebarWithCustomIconsExampleComponent
} from '@core/components';
import { PageContentDirective } from '@core/directives';

@Component({
  imports: [
    BasicSidebarExampleComponent,
    PageContentDirective,
    PlaygroundComponent,
    PageComponent,
    SidebarCompactExampleComponent,
    SidebarWithCustomIconsExampleComponent
  ],
    templateUrl: './sidebar-overview.component.html',
    styleUrl: './sidebar-overview.component.scss'
})
export class SidebarOverviewComponent {

}
