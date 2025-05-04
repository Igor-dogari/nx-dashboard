import { Component } from '@angular/core';
import { BasicSidebarExampleComponent } from '@core/pages';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { PageComponent } from '@core';
import { SidebarCompactExampleComponent } from '@core/pages';
import {
  SidebarWithCustomIconsExampleComponent
} from '@core/pages';

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
