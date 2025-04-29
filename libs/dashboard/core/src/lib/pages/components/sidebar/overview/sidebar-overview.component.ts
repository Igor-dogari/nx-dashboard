import { Component } from '@angular/core';
import { BasicSidebarExampleComponent } from '../_examples/basic-sidebar-example/basic-sidebar-example.component';
import { PageContentDirective } from '@shared';
import { PlaygroundComponent } from '@shared';
import { PageComponent } from '@shared';
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
