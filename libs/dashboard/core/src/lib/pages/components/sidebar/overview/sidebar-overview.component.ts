import { Component } from '@angular/core';
import { BasicSidebarExampleComponent } from '../_examples/basic-sidebar-example/basic-sidebar-example.component';
import { PageContentDirective } from '@core';
import { PlaygroundComponent } from '@core';
import { PageComponent } from '@core';
import { SidebarCompactExampleComponent } from '../_examples/sidebar-compact-example/sidebar-compact-example.component';
import {
  SidebarWithCustomIconsExampleComponent
} from '../_examples/sidebar-with-custom-icons-example/sidebar-with-custom-icons-example.component';

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
